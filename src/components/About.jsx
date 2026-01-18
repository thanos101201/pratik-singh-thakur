import { aboutMe, personalInfo } from '../data/portfolioData';
import pratikImg from '../data/pratik_img.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img
                    src={pratikImg}
                    alt="Pratik Singh Thakur"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-50"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-500 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-50 mb-4">
              Software Development Engineer
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {aboutMe.summary}
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {aboutMe.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Quick contact info */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-sm">{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
