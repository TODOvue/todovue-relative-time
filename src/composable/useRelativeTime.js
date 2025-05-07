const useRelativeTime = () => {
  const getRelativeTime = (dateString, isTableQuantity = false, compact = false) => {
    if (!dateString) return { text: isTableQuantity ? '-' : 'Sin fecha', tooltip: '' }
    
    const date = new Date(dateString)
    const now = new Date()
    const fullDate = new Intl.DateTimeFormat('es-CO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC'
    }).format(date)
    
    const diffInSeconds = Math.floor((date - now) / 1000)
    const diffInDays = Math.floor(diffInSeconds / 86400)
    const sameDay = date.toDateString() === now.toDateString()
    
    const getDayName = (d) =>
      new Intl.DateTimeFormat('es-CO', { weekday: 'long' }).format(d)
    
    const getDetailedBreakdown = (start, end) => {
      let remainingDays = Math.floor((end - start) / 86400000)
      const years = Math.floor(remainingDays / 365)
      remainingDays %= 365
      const months = Math.floor(remainingDays / 30)
      remainingDays %= 30
      const weeks = Math.floor(remainingDays / 7)
      const days = remainingDays % 7
      return { years, months, weeks, days }
    }
    
    const formatDetail = ({ years, months, weeks, days }) => {
      const parts = []
      if (years) parts.push(`${years} ${years === 1 ? 'año' : 'años'}`)
      if (months) parts.push(`${months} ${months === 1 ? 'mes' : 'meses'}`)
      if (weeks) parts.push(`${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`)
      if (days) parts.push(`${days} ${days === 1 ? 'día' : 'días'}`)
      return parts.slice(0, 2).join(', ')
    }
    
    const formatCompact = (value, unit) => {
      const timeUnits = {
        minuto: 'm',
        hora: 'h',
        dia: 'd',
        semana: 'w',
        mes: 'mo',
        anio: 'a'
      }
      return `${value}${timeUnits[unit] || ''}`
    }
    
    const getCompact = (value, unitSingular) => {
      const key = {
        minuto: 'minuto',
        hora: 'hora',
        dia: 'dia',
        semana: 'semana',
        mes: 'mes',
        anio: 'anio'
      }[unitSingular]
      return formatCompact(value, key)
    }
    
    if (sameDay) {
      const absSeconds = Math.abs(diffInSeconds)
      if (absSeconds < 60) {
        return {
          text: compact ? 'ahora' : diffInSeconds > 0 ? 'En un momento' : 'Hace un momento',
          tooltip: fullDate
        }
      }
      
      if (absSeconds < 3600) {
        const minutes = Math.floor(absSeconds / 60)
        return {
          text: compact
            ? getCompact(minutes, 'minuto')
            : diffInSeconds > 0
              ? `En ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`
              : `Hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`,
          tooltip: fullDate
        }
      }
      
      if (absSeconds < 86400) {
        const hours = Math.floor(absSeconds / 3600)
        return {
          text: compact
            ? getCompact(hours, 'hora')
            : diffInSeconds > 0
              ? `En ${hours} ${hours === 1 ? 'hora' : 'horas'}`
              : `Hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`,
          tooltip: fullDate
        }
      }
      
      return { text: 'Hoy', tooltip: fullDate }
    }
    
    if (diffInSeconds > 0) {
      if (diffInDays === 1) return { text: compact ? '1d' : 'Mañana', tooltip: fullDate }
      if (diffInDays === 2) return { text: compact ? '2d' : 'Pasado mañana', tooltip: fullDate }
      
      const nowDay = now.getDay()
      const dateDay = date.getDay()
      if (diffInDays < 7 && dateDay > nowDay)
        return { text: compact ? `${diffInDays}d` : `Este ${getDayName(date)}`, tooltip: fullDate }
      
      if (diffInDays < 14) return { text: compact ? '1w' : 'La próxima semana', tooltip: fullDate }
      if (diffInDays < 60)
        return {
          text: compact ? `${Math.round(diffInDays / 7)}w` : `En ${Math.round(diffInDays / 7)} semanas`,
          tooltip: fullDate
        }
      
      const detail = getDetailedBreakdown(now, date)
      return {
        text: compact
          ? getCompact(detail.years || detail.months, detail.years ? 'anio' : 'mes')
          : `En ${formatDetail(detail)}`,
        tooltip: fullDate
      }
    } else {
      const absDays = Math.abs(diffInDays)
      if (absDays === 1) return { text: compact ? '1d' : 'Ayer', tooltip: fullDate }
      if (absDays === 2) return { text: compact ? '2d' : 'Antes de ayer', tooltip: fullDate }
      
      const nowDay = now.getDay()
      const dateDay = date.getDay()
      if (absDays < 7 && dateDay < nowDay)
        return { text: compact ? `${absDays}d` : `El ${getDayName(date)} pasado`, tooltip: fullDate }
      
      if (absDays < 14)
        return { text: compact ? '1w' : 'La semana pasada', tooltip: fullDate }
      if (absDays < 60)
        return {
          text: compact ? `${Math.round(absDays / 7)}w` : `Hace ${Math.round(absDays / 7)} semanas`,
          tooltip: fullDate
        }
      
      const detail = getDetailedBreakdown(date, now)
      return {
        text: compact
          ? getCompact(detail.years || detail.months, detail.years ? 'anio' : 'mes')
          : `Hace ${formatDetail(detail)}`,
        tooltip: fullDate
      }
    }
  }
  
  return { getRelativeTime }
}

export default useRelativeTime
