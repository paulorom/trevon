import React from 'react';
import { parseDateTRV } from '../utils/date-util';

function formatarData(data) {
  
  return parseDateTRV(data);
}

function DataPost({ metadata }) {
  let dataFormatada = null;

  if (metadata) {
    if (metadata.dateModified) {
      dataFormatada = formatarData(metadata.dateModified);

      if (dataFormatada) {
        return ( <p className="text-sm opacity-30">
        Atualizado em {dataFormatada}
      </p>)
      }
      
    } else if (metadata.datePublished) {
      dataFormatada = formatarData(metadata.datePublished);
    }
  }

  if (!dataFormatada) {
    return <p className="text-sm opacity-30">Data não disponível</p>;
  }

  return (
    <p className="text-sm opacity-30">
      {dataFormatada}
    </p>
  );
}

export default DataPost;
