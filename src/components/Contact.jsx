import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 group"
            >
              <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Email</h3>
              <p className="text-slate-400 text-sm break-all">{personalInfo.email}</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone}`}
              className="bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 group"
            >
              <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Phone</h3>
              <p className="text-slate-400 text-sm">{personalInfo.phone}</p>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 group"
            >
              <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-500 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">LinkedIn</h3>
              <p className="text-slate-400 text-sm">Connect with me</p>
            </a>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">
              Interested in working together? Let's connect!
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
