import DiagonalContent from '../Components/DiagonalContent';
import Flex from './Styles/Flex';
import Project from '../Components/Project';

export default function Projects() {
  return (
    <DiagonalContent key="projects" id="projects">
      <h2 className="skewy">Projects</h2>
      <Flex>
        {MyProjects.map(({ title, desc, webLink, githubLink }) => (
          <Project
            key={title}
            title={title}
            desc={desc}
            webLink={webLink}
            githubLink={githubLink}
          />
        ))}
      </Flex>
    </DiagonalContent>
  );
}

const MyProjects = [
  {
    title: 'Hellbonix',
    desc:
      'A fun dictionary app I am building to keep track of the silly words my wife makes up.',
    webLink: '//hellbonix.netlify.app',
    githubLink: '//github.com/timscodebase/hellbonix',
  },
  {
    title: 'United States COVID-19 Data',
    desc:
      'A fun dictionary app I am building to keep track of the silly words my wife makes up.',
    webLink: '//us-covid-19-data.netlify.app/',
    githubLink: '//github.com/timscodebase/covid',
  },
  {
    title: 'Me and My Song',
    desc:
      'A custom built Wordpress template for an SF Bay Area Singer/Song Writer',
    webLink: '//meandmysong.com',
    githubLink: '//github.com/timscodebase/hellbonix',
  },
];
