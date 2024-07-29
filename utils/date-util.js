const monthsPTBR = {
    'janeiro': 0,
    'fevereiro': 1,
    'março': 2,
    'abril': 3,
    'maio': 4,
    'junho': 5,
    'julho': 6,
    'agosto': 7,
    'setembro': 8,
    'outubro': 9,
    'novembro': 10,
    'dezembro': 11
  };

  const mesesPTBR = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro',
  };
  
  export function parseDatePTBR(dateString) {
    const [dia, mes, ano] = dateString.toLowerCase().split(' ');
   
    const monthIndex = monthsPTBR[mes];
    if (typeof monthIndex !== 'undefined' && dia && ano) {
      return new Date(ano, monthIndex, dia);
    } else {
      throw new Error('Formato de data inválido.');
    }
  }

  export function parseDateTRV(dateString) {
    const [ano, mes, dia] = dateString.split('-');
   
    return `${dia} ${mesesPTBR[mes]} ${ano}`;

  }

  export function parseDate(dataString) {
    var str = String(dataString);
    const parts = str.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Subtrai 1 do mês, pois os meses em JavaScript começam em 0 (janeiro = 0, fevereiro = 1, etc.)
    const day = parseInt(parts[2], 10);
  
    return new Date(year, month, day);
  }
  