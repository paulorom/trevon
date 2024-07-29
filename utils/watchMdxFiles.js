import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';
import matter from 'gray-matter'; // If you're using frontmatter in MDX files

// Directory where your MDX files are located
const mdxDirectory = path.join(process.cwd(), 'posts');

// Function to parse frontmatter and extract URL
function extractUrlFromMatter(fileContent) {
    const { data } = matter(fileContent);
    return data.url;
}

// Function to watch for changes in MDX files
export const watchMdxFiles = async () => {
    chokidar.watch(mdxDirectory).on('change', (filePath) => {
        if (path.extname(filePath) === '.mdx') {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading file ${filePath}: ${err}`);
                    return;
                }

                const url = extractUrlFromMatter(data);
                if (!url) {
                    console.error(`URL not found in metadata of file ${filePath}`);
                    return;
                }

                const newFilePath = path.join(mdxDirectory, `${url}.mdx`);

                fs.rename(filePath, newFilePath, (err) => {
                    if (err) {
                        console.error(`Error renaming file ${filePath}: ${err}`);
                        return;
                    }
                    console.log(`File ${filePath} renamed to ${newFilePath}`);
                });
            });
        }
    });
}
