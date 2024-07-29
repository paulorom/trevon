/* eslint-disable import/no-anonymous-default-export */
import { getPosts } from '../../utils/mdx-utils';


const posts = getPosts(); //process.env.NODE_ENV === 'production' ? require('../../cache/data').posts : getSortedPostsData()

/* ESTRUTURA POST
---
title: "Renda Fixa versus Renda Variável: Vantagens e Desvantagens de Ambas"
description: "Compreenda as diferenças entre investimentos de renda fixa e renda variável e escolha a estratégia que melhor se adapte aos seus objetivos financeiros."
date: 3 Setembro 2023
author: "Miranda"
thumbnailUrl: ""
url: "renda-fixa-versus-variavel-vantagens-e-desvantagens-de-ambas"
---
*/ 

export default (req, res) => {
  const { title, author, description } = req.query;
  const results = posts.filter((post) => {
    const lowerCaseTitle = post.data.title?.toLowerCase();
    const lowerCaseAuthor = post.data.author ? post.data.author?.toLowerCase() : '';
    const postDescription = post.data.description ? post.data.description?.toLowerCase() : '';

    // Verifica se o título corresponde à consulta
    const titleMatch = !title || lowerCaseTitle?.includes(title?.toLowerCase());

    // Verifica se o autor corresponde à consulta
    const authorMatch = !author || lowerCaseAuthor?.includes(author?.toLowerCase());

    // Verifica se a descrição corresponde à consulta
    const descriptionMatch = !description || postDescription?.includes(description?.toLowerCase());

    // Retorna verdadeiro se todos os critérios correspondem
    return titleMatch && authorMatch && descriptionMatch;
  }).map((item) => ({
    id: item.filePath.replace(/\.mdx?$/, ''),
    title: item.data?.title,
    content: item.data,
  }));

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results }));
};
