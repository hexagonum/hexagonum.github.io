import Hexagon from '@hexagonum/components/Hexagon';
import useWindowSize from '@hexagonum/hooks/use-window-size';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const themes = ['theme-0'];

type Project = { emoji: string; name: string; url: string };

const projects: Project[] = [
  {
    emoji: '☕',
    name: 'cafesang',
    url: 'https://hexagonum.github.io/cafesang/',
  },
  { emoji: '🎨', name: 'colors', url: 'https://hexagonum.github.io/colors/' },
  {
    emoji: '🧠',
    name: 'psychology',
    url: 'https://hexagonum.github.io/hofstede/',
  },
  {
    emoji: '🗺️',
    name: 'maps.svg',
    url: 'https://hexagonum.github.io/maps.svg/',
  },
  {
    emoji: '⚽',
    name: 'liverpool',
    url: 'https://hexagonum.github.io/liverpool/',
  },
  { emoji: '💻', name: 'forex', url: 'https://hexagonum.github.io/techstack/' },
  { emoji: '📈', name: 'trends', url: 'https://hexagonum.github.io/trends/' },
  { emoji: '☁️', name: 'weather', url: 'https://hexagonum.github.io/weather/' },
  { emoji: '🐝', name: 'bumblebee', url: '#' },
];

export const HomePage: NextPage = () => {
  const router = useRouter();
  const { visible } = router.query;

  const { width, height } = useWindowSize();

  const [theme, setTheme] = useState(themes[0]);
  const [{ maxRows, maxColumns }, setMax] = useState({
    maxColumns: Math.floor(width / 128) + 10,
    maxRows: Math.floor(height / 112) * 2 + 10,
  });

  useEffect(() => {
    const maxColumns = Math.floor(width / 128) + 5;
    const maxRows = Math.floor(height / 112) * 2 + 5;

    setMax({ maxColumns, maxRows });
  }, [width, height]);

  const columns = [...Array(maxColumns + 1).keys()].map((i: number) => i);
  const rows = [...Array(maxRows + 1).keys()].map(() => columns);

  return (
    <div className={theme}>
      <main className="w-screen h-screen overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 right-0 left-0 bottom-0 mx-auto">
            <div className="relative">
              {rows.map((columns: number[], row: number) => {
                const filterProjects = projects.filter(
                  (_, index) => index % 2 === row % 2
                );
                return columns.map((column: number) => {
                  const projectIndex: number =
                    (column + row) % filterProjects.length;
                  const project = filterProjects[projectIndex];
                  return (
                    <button
                      type="button"
                      id={`hexagon-${row}-${column}`}
                      key={`hexagon-row-${column}`}
                      data-row={row}
                      data-column={column}
                      onClick={() => {
                        const themeIndex = themes.indexOf(theme);
                        const nextIndex =
                          themeIndex + 1 === themes.length ? 0 : themeIndex + 1;
                        const nextTheme = themes[nextIndex];
                        console.log(nextTheme);
                        setTheme(nextTheme);
                      }}
                      onMouseLeave={() => {
                        ['.level-1', '.level-2', '.level-3'].forEach(
                          (className) => {
                            const oldBoxes =
                              document.querySelectorAll(className);
                            oldBoxes.forEach((box) => {
                              box.classList.remove(className.replace('.', ''));
                            });
                          }
                        );
                      }}
                      onMouseOver={(event: any) => {
                        const row = parseInt(event.target.dataset.row, 10);
                        const column = parseInt(
                          event.target.dataset.column,
                          10
                        );
                        // Level 1
                        const leftLevel1 = row % 2 === 0 ? 0 : -1;
                        const rightLevel1 = row % 2 === 0 ? 1 : 0;
                        const level1Boxes = [
                          { row: row - 2, column: column },
                          { row: row - 1, column: column + leftLevel1 },
                          { row: row - 1, column: column + rightLevel1 },
                          { row: row + 1, column: column + leftLevel1 },
                          { row: row + 1, column: column + rightLevel1 },
                          { row: row + 2, column: column },
                        ].map(({ row, column }) => `hexagon-${row}-${column}`);
                        level1Boxes.forEach((id) => {
                          document.getElementById(id)?.classList.add('level-1');
                        });
                        // Level 2
                        const rightLevel2 = row % 2 ? 0 : 1;
                        const leftLevel2 = row % 2 ? -1 : 0;
                        const level2Boxes = [
                          { row: row - 4, column: column },
                          { row: row - 3, column: column + leftLevel2 },
                          { row: row - 3, column: column + rightLevel2 },
                          { row: row - 2, column: column + 1 },
                          { row: row - 2, column: column + -1 },
                          { row: row, column: column + -1 },
                          { row: row, column: column + 1 },
                          { row: row + 2, column: column + 1 },
                          { row: row + 2, column: column + -1 },
                          { row: row + 3, column: column + leftLevel2 },
                          { row: row + 3, column: column + rightLevel2 },
                          { row: row + 4, column: column },
                        ].map(({ row, column }) => `hexagon-${row}-${column}`);
                        level2Boxes.forEach((id) => {
                          document.getElementById(id)?.classList.add('level-2');
                        });
                        // Level 3
                        const level3Boxes = [
                          { row: row - 6, column: column },
                          { row: row - 5, column: column + leftLevel2 },
                          { row: row - 5, column: column + rightLevel2 },
                          { row: row - 4, column: column - 1 },
                          { row: row - 4, column: column + 1 },
                          { row: row - 3, column: column + leftLevel2 - 1 },
                          { row: row - 3, column: column + rightLevel2 + 1 },
                          { row: row - 1, column: column + leftLevel2 - 1 },
                          { row: row - 1, column: column + rightLevel2 + 1 },
                          { row: row + 1, column: column + leftLevel2 - 1 },
                          { row: row + 1, column: column + rightLevel2 + 1 },
                          { row: row + 3, column: column + leftLevel2 - 1 },
                          { row: row + 3, column: column + rightLevel2 + 1 },
                          { row: row + 4, column: column - 1 },
                          { row: row + 4, column: column + 1 },
                          { row: row + 5, column: column + leftLevel2 },
                          { row: row + 5, column: column + rightLevel2 },
                          { row: row + 6, column: column },
                        ].map(({ row, column }) => `hexagon-${row}-${column}`);
                        level3Boxes.forEach((id) => {
                          document.getElementById(id)?.classList.add('level-3');
                        });
                      }}
                      className="relative"
                    >
                      <div
                        className={`${
                          visible === 'true' ? 'flex' : 'project'
                        } absolute w-full h-full items-center justify-center text-6xl`}
                      >
                        <Link
                          id={project.name}
                          href={project.url}
                          target="_blank"
                        >
                          {project.emoji}
                        </Link>
                      </div>
                      <Hexagon />
                    </button>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
