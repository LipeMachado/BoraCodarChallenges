import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

interface Project {
  link: string;
  title: string;
  description: string;
}

const BASE_PATH = path.join(process.cwd(), 'src', 'app', '(projects)');

// Função recursiva para buscar projetos
async function getProjects(directory: string, baseRoute = ""): Promise<Project[]> {
  const result: Project[] = [];
  const entries = fs.readdirSync(directory);

  for (const entry of entries) {
    const entryPath = path.join(directory, entry);
    const stats = fs.statSync(entryPath);

    if (stats.isDirectory()) {
      // Recursão para subpastas
      const subProjects = await getProjects(entryPath, `${baseRoute}/${entry}`);
      result.push(...subProjects);
    } else if (stats.isFile() && entry === 'page.tsx') {
      try {
        // Lê o arquivo page.tsx como string
        const fileContent = fs.readFileSync(entryPath, 'utf-8');

        // Usar expressões regulares para encontrar o title e description no conteúdo do arquivo
        const titleMatch = fileContent.match(/export const title = "([^"]+)"/);
        const descriptionMatch = fileContent.match(/export const description = "([^"]+)"/);

        const title = titleMatch ? titleMatch[1] : 'Título não encontrado';
        const description = descriptionMatch ? descriptionMatch[1] : 'Descrição não disponível';

        // Filtragem das pastas para remover aquelas com parênteses
        let projectLink = baseRoute
          .split("/")
          .filter(Boolean)
          .filter(pasta => !pasta.includes('(') && !pasta.includes(')')) // Filtra qualquer pasta com parênteses
          .join("/");

        // Remover a parte '/page' do link, se existir
        projectLink = projectLink.replace('/page', '');

        // Adicionar ao resultado
        result.push({
          link: `/${projectLink}`,  // Apenas o nome da última pasta válida, sem /page
          title,
          description,
        });
      } catch (error) {
        console.error(`Erro ao carregar o arquivo ${entryPath}:`, error);
        result.push({
          link: `${baseRoute.replace("/(projects)", "")}`,  // Remover a parte "/(projects)"
          title: 'Erro ao carregar título',
          description: 'Descrição não disponível',
        });
      }
    }
  }

  return result;
}

// Handler da API
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await getProjects(BASE_PATH);
    // Apenas retornar o link simplificado
    const simplifiedProjects = projects.map(project => ({
      link: project.link,  // Aqui será só o nome da última pasta válida
      title: project.title,
      description: project.description,
    }));

    res.status(200).json({ projects: simplifiedProjects });
  } catch (error) {
    console.error("Error reading projects:", error);
    res.status(500).json({ error: "Failed to load projects" });
  }
}
