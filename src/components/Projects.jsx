import softui from '../assets/logo-xd.svg'
import progress from '../assets/logo-atlassian.svg'
import platform from '../assets/logo-slack.svg'
import spotify from '../assets/logo-spotify.svg'
import pricing from '../assets/logo-invision.svg'
import redesign from '../assets/logo-jira.svg'

export default function Projects() {
  const projects = [
    {
      img: softui,
      company: 'Soft UI XD Version',
      budget: 14000,
      completion: 60,
    },
    {
      img: progress,
      company: 'Add Progress Track',
      budget: 3000,
      completion: 10,
    },
    {
      img: platform,
      company: 'Fix Platform Errors',
      completion: 100,
    },
    {
      img: spotify,
      company: 'Launch our Mobile App',
      budget: 20500,
      completion: 100,
    },
    {
      img: pricing,
      company: 'Add the New Pricing Page',
      budget: 500,
      completion: 25,
    },
    {
      img: redesign,
      company: 'Redesign New Online Shop',
      budget: 2000,
      completion: 40,
    },
  ]

  return (
    <div className="w-full h-full bg-white rounded-lg shadow-xl py-4">
      <p className="font-bold px-6 py-2">Projects</p>
      <p className="opacity-60 px-8 py-2">
        <b>30 done</b> this month
      </p>
      <div className="overflow-x-auto">
        <table className="my-4 w-full whitespace-nowrap table-auto border-collapse">
          <thead>
            <tr className="border-b-2 text-xs text-gray-500 text-left">
              <th className="px-8 py-2">COMPANIES</th>
              <th className="p-4">BUDGET</th>
              <th className="p-4">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                className="text-md border-b font-medium text-gray-700"
                key={index}
              >
                <td className="px-8 py-2">
                  <div className="flex space-x-2 items-center">
                    <img src={project?.img} className="w-10 h-10" alt="" />
                    <span>{project.company}</span>
                  </div>
                </td>
                <td className="p-4 opacity-70 text-sm">
                  {project?.budget ? `$${project.budget}` : `Not Set`}
                </td>
                <td className="p-4 opacity-70 text-sm">
                  {project.completion}%
                  <div className="relative w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className={`absolute top-0 left-0 h-2 rounded-full ${
                        project.completion < 40
                          ? 'bg-red-500'
                          : project.completion < 80
                          ? 'bg-cyan-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
