import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronDown, Briefcase, GraduationCap, ExternalLink, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { EmberParticles } from '@/components/EmberParticles';
import { ProjectModal, type Project } from '@/components/ProjectModal';
import srdjanShield from '@/assets/uploads/srdjan-shield.png';
import projectJbFiscal from '@/assets/uploads/project-jbfiscal.png';
import projectDiRestoran from '@/assets/uploads/project-direstoran.png';
import projectMvPharm from '@/assets/uploads/project-mvpharm.png';
import projectSmEnergy from '@/assets/uploads/project-smenergy.png';
import projectYvalise from '@/assets/uploads/project-yvalise.png';
import projectKmMont from '@/assets/uploads/project-kmmont.png';
import projectDrMicic from '@/assets/uploads/project-drmicic.png';
import projectJegricka from '@/assets/uploads/project-jegricka.png';
import projectVujanic from '@/assets/uploads/project-vujanic.png';
import projectB164 from '@/assets/uploads/project-b164.png';
import projectPincirBio from '@/assets/uploads/project-pincirbio.png';
import projectLannaThai from '@/assets/uploads/project-lannathai.png';

// Work experience data
const workExperience = [
{
  id: 'elementor-sm',
  company: 'Elementor',
  role: 'Serbia Site Manager',
  period: 'Nov 2024 – Present',
  description: 'Team Management: Oversee the well-being of the entire Serbian team. HR Coordination: Hire, onboard, and support new employees. Event Organization: Plan and execute company events, fostering team cohesion. Budget Planning: Develop and manage budgets for local operations. Operations Support: Serve as a liaison between the Serbian team and HQ.',
  isCurrent: true
},
{
  id: 'elementor-tl',
  company: 'Elementor',
  role: 'ATS Team Lead',
  period: 'Sep 2021 – Present',
  description: 'Leading a team of 10-15 members. Working on projects to improve customer experience journey. Integrating support teams (Strattic to Elementor). Performing weekly, monthly and yearly evaluations and reports.',
  isCurrent: true
},
{
  id: 'elementor-sa',
  company: 'Elementor',
  role: 'Expert Support Agent',
  period: 'Jul 2021 – Sep 2021',
  description: 'Helping users and support agents resolve complex issues they encounter.'
},
{
  id: 'freelance',
  company: 'Freelance',
  role: 'WordPress Developer',
  period: 'Oct 2018 – Present',
  description: 'Developing custom websites using the WordPress platform. Collaborating with smaller agencies and marketing experts. Focus on websites for small and medium-sized businesses. Providing support and maintenance plans, as well as website and online presence consulting.',
  isCurrent: true
},
{
  id: 'dynamic-agile',
  company: 'Dynamic Agile Development',
  role: 'Lead Developer',
  period: 'Dec 2020 – Jul 2021',
  description: 'Developing custom solutions for clients using WordPress CRM, page builders, and custom solutions. Integrated WooCommerce and its ecosystem, including payment gateways.',
  location: 'Delaware, United States'
},
{
  id: 'webbay',
  company: 'Web Bay',
  role: 'WordPress Developer',
  period: 'Apr 2020 – Dec 2020',
  description: 'Working on large-scale projects using Elementor and custom solutions for US and Canadian markets.',
  location: 'Belgrade, Serbia'
}];


// Education data
const education = [
{
  id: 'web-dev',
  school: 'Faculty of Technical Sciences, Novi Sad',
  degree: 'Web Development Course',
  year: '2017',
  description: 'Successfully completed the Web Development course organized by the Faculty of Technical Science.'
},
{
  id: 'law',
  school: 'Faculty of Law, Lazar Vrkatić, Novi Sad',
  degree: 'Bachelor of Laws',
  year: '2011 – 2015',
  description: 'During my studies, I developed a keen interest in criminal law and human rights. I was an active member of the student parliament and ELSA. Honored to receive a scholarship from the Dr. Lazar Vrkatić Foundation.'
}];


// Projects data
const projects: Project[] = [
{
  id: 'di-restoran',
  title: 'Di Restoran',
  description: 'A comprehensive website for a restaurant in Žabalj, Serbia. Features the full menu, contact details, and is fully multilingual to cater to a diverse clientele.',
  altText: 'Di Restoran — multilingual restaurant website from Žabalj, Serbia',
  websiteUrl: 'https://direstoran.rs/',
  screenshotUrl: projectDiRestoran
},
{
  id: 'mv-pharm',
  title: 'MV Pharm',
  description: 'Professional website for a pharmaceutical company, showcasing their products and services with a clean, trustworthy design.',
  altText: 'MV Pharm — professional pharmaceutical company website',
  websiteUrl: 'https://mvpharm.rs/',
  screenshotUrl: projectMvPharm
},
{
  id: 'sm-energy',
  title: 'SM Energy',
  description: 'Corporate website for an energy company specializing in biogas production and renewable energy solutions.',
  altText: 'SM Energy — corporate website for biogas and renewable energy',
  websiteUrl: 'https://smenergy.rs/',
  screenshotUrl: projectSmEnergy
},
{
  id: 'yvalise-studio',
  title: 'Yvalise Studio',
  description: 'Elegant fashion e-commerce website featuring a curated collection of designer clothing with a minimalist, high-end aesthetic.',
  altText: 'Yvalise Studio — minimalist designer fashion e-commerce site',
  websiteUrl: 'https://yvalise.studio/',
  screenshotUrl: projectYvalise
},
{
  id: 'km-mont',
  title: 'KM Mont',
  description: 'Multilingual corporate website for a construction company specializing in pipelines and industrial installations across Europe.',
  altText: 'KM Mont — multilingual construction company for pipeline installations',
  websiteUrl: 'https://kmmont.com/en/',
  screenshotUrl: projectKmMont
},
{
  id: 'dr-ljubomir-micic',
  title: 'Dr Ljubomir Micić',
  description: 'Professional website for a dental educator offering courses in minimally invasive stomatology restorations and modern dental protocols.',
  altText: 'Dr Ljubomir Micić — dental education and training courses website',
  websiteUrl: 'https://ljubomirmicic.com/',
  screenshotUrl: projectDrMicic
},
{
  id: 'jb-fiscal',
  title: 'JB Fiscal Consulting',
  description: 'Corporate website for a fiscal consulting company helping technology providers and retailers stay compliant with regulatory changes across multiple countries.',
  altText: 'JB Fiscal Consulting — regulatory compliance for tech providers',
  websiteUrl: 'https://jbfiscalconsulting.com/',
  screenshotUrl: projectJbFiscal
},
{
  id: 'jegricka-carda',
  title: 'Jegrička Čarda',
  description: 'Beautiful website for a traditional Serbian riverside restaurant (čarda), showcasing their authentic cuisine and rustic atmosphere by the Jegrička river.',
  altText: 'Jegrička Čarda — traditional Serbian riverside restaurant website',
  websiteUrl: 'https://jegrickacarda.rs/',
  screenshotUrl: projectJegricka
},
{
  id: 'vujanic-farma',
  title: 'Vujanić Farma',
  description: 'Agricultural farm website presenting their natural goat milk products, cheese varieties, and family farming operations since 1991.',
  altText: 'Vujanić Farma — family goat farm and dairy products website',
  websiteUrl: 'https://vujanicfarma.rs/',
  screenshotUrl: projectVujanic
},
{
  id: 'b164',
  title: 'B164',
  description: 'Modern website for a mountain apartment complex in Kopaonik, Serbia, blending contemporary design with traditional architecture.',
  altText: 'B164 — modern mountain apartments in Kopaonik, Serbia',
  websiteUrl: 'https://b164.rs/',
  screenshotUrl: projectB164
},
{
  id: 'pincir-bio',
  title: 'Pincir Bio',
  description: 'Organic agriculture website featuring biological plant protection products, fresh vegetables, and integrated farming solutions with online ordering.',
  altText: 'Pincir Bio — organic farming and plant protection products',
  websiteUrl: 'https://pincirbio.rs/',
  screenshotUrl: projectPincirBio
},
{
  id: 'lanna-thai',
  title: 'Lanna Thai',
  description: 'Elegant website for a Thai massage spa in Belgrade, featuring traditional Thai treatments, pricing, and a relaxing aesthetic that reflects the authentic Thai wellness experience.',
  altText: 'Lanna Thai — traditional Thai massage spa in Belgrade',
  websiteUrl: 'https://lannathai.rs/',
  screenshotUrl: projectLannaThai
}];


// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Section component with scroll animation
function AnimatedSection({ children, className = '' }: {children: React.ReactNode;className?: string;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}>

			{children}
		</motion.section>);

}

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div data-ev-id="ev_a9d7c30b0e" className="min-h-screen bg-ink-dark font-body text-parchment">
			{/* Hero Section */}
			<section data-ev-id="ev_4eba2f0840" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden vignette">
				{/* Background gradient */}
				<div data-ev-id="ev_1fc34a1e58" className="absolute inset-0 bg-gradient-to-b from-ink-dark via-ink to-ink-dark" />
				
				{/* Ember particles */}
				<EmberParticles count={25} />

				{/* Content */}
				<div data-ev-id="ev_38a896bf68" className="relative z-10 text-center px-6 max-w-5xl mx-auto">
					<motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-8">

						{/* Portrait with Ornate Shield Frame */}
						<motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="relative">

							<div data-ev-id="ev_25f1cecd23" className="relative w-64 h-64 md:w-80 md:h-80">
								{/* Outer glow */}
								<div data-ev-id="ev_dfccbc106b"
                className="absolute inset-0 blur-2xl opacity-50"
                style={{
                  background: 'radial-gradient(ellipse, #e0b563 0%, #8B0000 40%, transparent 70%)'
                }} />

								{/* Shield image */}
								<img data-ev-id="ev_801dbd3aa9"
                src={srdjanShield}
                alt="Srdjan Marinkovic portrait in ornate Gryffindor shield frame"
                className="relative w-full h-full object-contain drop-shadow-2xl"
                fetchPriority="high" />

							</div>
						</motion.div>

						{/* Decorative line */}
						<motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center justify-center gap-4">


							<div data-ev-id="ev_c5f71a5b0e" className="h-px w-16 bg-gradient-to-r from-transparent to-gold-dark" />
							<div data-ev-id="ev_25f1cecd23" className="w-2 h-2 rotate-45 bg-gold-dark" />
							<div data-ev-id="ev_2ce5c3be47" className="h-px w-16 bg-gradient-to-l from-transparent to-gold-dark" />
						</motion.div>

						{/* Name */}
						<motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-gold tracking-wide"
              style={{ textShadow: '0 0 40px rgba(224, 181, 99, 0.3)' }}>


							Srdjan Marinkovic
						</motion.h1>

						{/* Tagline */}
						<motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-parchment/80 font-body italic">


							From Law to Web Master
						</motion.p>

						{/* Subtitle */}
						<motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-crimson-light font-display uppercase tracking-[0.2em]">


							ATS Team Lead & Serbia Site Manager at Elementor
						</motion.p>

						{/* Social links - stacked on left */}
						<motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">

							<a data-ev-id="ev_6c62bb74c6"
              href="https://www.facebook.com/Sergijus/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover cursor-pointer bg-ink/80 backdrop-blur-sm"
              aria-label="Facebook">

								<Facebook size={20} />
							</a>
							<a data-ev-id="ev_79bbc84be3"
              href="https://www.instagram.com/sergijus022/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover cursor-pointer bg-ink/80 backdrop-blur-sm"
              aria-label="Instagram">

								<Instagram size={20} />
							</a>
							<a data-ev-id="ev_442e4d3c48"
              href="https://www.linkedin.com/in/srdjan-marinkovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover cursor-pointer bg-ink/80 backdrop-blur-sm"
              aria-label="LinkedIn">

								<Linkedin size={20} />
							</a>
							<a data-ev-id="ev_d92eca199b"
              href="mailto:web.srdjan.marinkovic@gmail.com"
              className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover cursor-pointer bg-ink/80 backdrop-blur-sm"
              aria-label="Email">

								<Mail size={20} />
							</a>
						</motion.div>
					</motion.div>
				</div>

				{/* Scroll indicator */}
				<motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          aria-label="Scroll to content">

					<motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>

						<ChevronDown size={32} />
					</motion.div>
				</motion.button>
			</section>

			{/* About Section */}
			<AnimatedSection className="py-24 px-6">
				<div data-ev-id="ev_334eb2c601" id="about" className="max-w-4xl mx-auto">
					<div data-ev-id="ev_6a3f0e2366" className="relative">
						{/* Section header */}
						<div data-ev-id="ev_2e1ba2e181" className="flex items-center gap-4 mb-8">
							<div data-ev-id="ev_8a4d549857" className="h-px flex-1 bg-gradient-to-r from-gold-dark to-transparent" />
							<h2 data-ev-id="ev_d920b9d6a8" className="font-display text-2xl md:text-3xl text-gold uppercase tracking-[0.15em]">
								About Me
							</h2>
							<div data-ev-id="ev_d89b59a8a4" className="h-px flex-1 bg-gradient-to-l from-gold-dark to-transparent" />
						</div>

						{/* Parchment card */}
						<div data-ev-id="ev_02f2d296e9" className="relative bg-ink-light border border-border-card rounded-lg p-8 md:p-12 parchment-texture">
							{/* Corner decorations */}
							<div data-ev-id="ev_d8d73d3f14" className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-dark/60 rounded-tl-lg" />
							<div data-ev-id="ev_c64735ea3c" className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-dark/60 rounded-tr-lg" />
							<div data-ev-id="ev_44c4b88b91" className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-dark/60 rounded-bl-lg" />
							<div data-ev-id="ev_c9b8e30110" className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-dark/60 rounded-br-lg" />

							<p data-ev-id="ev_241c42dfab" className="relative z-10 text-lg md:text-xl leading-relaxed text-parchment">
								Born in 1990 in Serbia, I initially pursued a career in criminal law after graduating from law school. However, in 2017, I decided to follow my passion for web development.
							</p>
							<p data-ev-id="ev_87bd2aaeaf" className="relative z-10 text-lg md:text-xl leading-relaxed text-parchment mt-6">
								Since then, I've been dedicated to creating stunning websites, primarily using WordPress. Ever since AI came into the picture, I've expanded into automation, internal app development, workflows, and process optimization.
							</p>
							<p data-ev-id="ev_5aaeb3a8f1" className="relative z-10 text-lg md:text-xl leading-relaxed text-parchment mt-6">Currently, I hold the position of ATS Team Lead and Serbia Site Manager at Elementor, where I lead two teams: a CX team of ~15 experts and developers, and the Serbian team of ~35 people - overseeing operations, HR coordination, event organization, and company culture.

              </p>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Skills & Expertise Section */}
			<AnimatedSection className="py-24 px-6 bg-gradient-to-b from-ink-dark via-ink to-ink-dark">
				<div data-ev-id="ev_734d1414ab" className="max-w-4xl mx-auto">
					{/* Section header */}
					<div data-ev-id="ev_1510d9543d" className="flex items-center gap-4 mb-12">
						<div data-ev-id="ev_58f517153a" className="h-px flex-1 bg-gradient-to-r from-gold-dark to-transparent" />
						<h2 data-ev-id="ev_d67b273438" className="font-display text-2xl md:text-3xl text-gold uppercase tracking-[0.15em]">
							Skills & Expertise
						</h2>
						<div data-ev-id="ev_7f6a9a619e" className="h-px flex-1 bg-gradient-to-l from-gold-dark to-transparent" />
					</div>

					{/* Skills card */}
					<div data-ev-id="ev_46ea495d36" className="bg-ink-light border border-border-card rounded-lg p-8 md:p-10">
						<div data-ev-id="ev_a94f5caea1" className="flex flex-col gap-6">
							{/* Leadership & Management */}
							<div data-ev-id="ev_7781456d31" className="flex flex-col md:flex-row md:items-start gap-4">
								<h3 data-ev-id="ev_42b7db6488" className="font-display text-lg text-gold uppercase tracking-wider md:w-56 md:shrink-0">
									Leadership & Management
								</h3>
								<div data-ev-id="ev_bbf12af1f0" className="flex flex-wrap gap-2">
									<span data-ev-id="ev_c5ec47494f" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Technical team management</span>
									<span data-ev-id="ev_990257b050" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">CX strategy & process improvement</span>
									<span data-ev-id="ev_ea90342ff0" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">HR coordination & operations</span>
									<span data-ev-id="ev_3612de49da" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Cross-team / M&A integration</span>
									<span data-ev-id="ev_15a9ee35e7" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">KPIs & team improvement</span>
									<span data-ev-id="ev_f910c86db3" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Motivation & processes</span>
									<span data-ev-id="ev_e9eafb32d4" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">SMART / Agile</span>
									<span data-ev-id="ev_80fd220b0b" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Reports & planning</span>
								</div>
							</div>

							{/* Divider */}
							<div data-ev-id="ev_00ad1e49d8" className="h-px w-full bg-gold-dark/40" />

							{/* Technical */}
							<div data-ev-id="ev_5118d0d231" className="flex flex-col md:flex-row md:items-start gap-4">
								<h3 data-ev-id="ev_4ebe25be91" className="font-display text-lg text-gold uppercase tracking-wider md:w-56 md:shrink-0">
									Technical
								</h3>
								<div data-ev-id="ev_bc7f57d418" className="flex flex-wrap gap-2">
									<span data-ev-id="ev_ae79098348" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Elementor</span>
									<span data-ev-id="ev_1d666c1852" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">WordPress</span>
									<span data-ev-id="ev_0122df30b7" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">WooCommerce & payment integration</span>
									<span data-ev-id="ev_475645629c" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Front-end development</span>
									<span data-ev-id="ev_030c687507" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">HTML / CSS / JS / TS / React</span>
									<span data-ev-id="ev_cf6751e041" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">JIRA / Confluence</span>
									<span data-ev-id="ev_1f7b35c67d" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">AI-powered app building — advanced</span>
								</div>
							</div>

							{/* Divider */}
							<div data-ev-id="ev_e4621cc113" className="h-px w-full bg-gold-dark/40" />

							{/* Other */}
							<div data-ev-id="ev_08727bb384" className="flex flex-col md:flex-row md:items-start gap-4">
								<h3 data-ev-id="ev_63dc79c4d0" className="font-display text-lg text-gold uppercase tracking-wider md:w-56 md:shrink-0">
									Other
								</h3>
								<div data-ev-id="ev_5cf4e69994" className="flex flex-wrap gap-2">
									<span data-ev-id="ev_890cf47cc1" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Public speaker</span>
									<span data-ev-id="ev_6f08b3577f" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Multilingual site delivery</span>
									<span data-ev-id="ev_7057e994c0" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">English — advanced</span>
									<span data-ev-id="ev_589c6c4799" className="px-3 py-1.5 text-sm text-parchment bg-gold-dark/20 border border-gold-dark/50 rounded-full">Serbian — native</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Work Experience Section */}
			<AnimatedSection className="py-24 px-6">
				<div data-ev-id="ev_568de6c3e1" className="max-w-5xl mx-auto">
					{/* Section header */}
					<div data-ev-id="ev_293b664b79" className="flex items-center gap-4 mb-16">
						<Briefcase className="text-gold-dark" size={28} />
						<h2 data-ev-id="ev_3a447d4c5b" className="font-display text-2xl md:text-3xl text-gold uppercase tracking-[0.15em]">
							Work History
						</h2>
						<div data-ev-id="ev_e7b38b3166" className="h-px flex-1 bg-gradient-to-r from-gold-dark to-transparent" />
					</div>

					{/* Timeline */}
					<div data-ev-id="ev_b32fb12f20" className="relative">
						{/* Vertical line */}
						<div data-ev-id="ev_c4b4f6dc68" className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-dark via-crimson to-gold-dark/30 transform md:-translate-x-1/2" />

						{workExperience.map((job, index) =>
            <TimelineItem key={job.id} job={job} index={index} />
            )}
					</div>
				</div>
			</AnimatedSection>

			{/* Education Section */}
			<AnimatedSection className="py-24 px-6">
				<div data-ev-id="ev_224dc73201" className="max-w-4xl mx-auto">
					{/* Section header */}
					<div data-ev-id="ev_8e4a136753" className="flex items-center gap-4 mb-12">
						<GraduationCap className="text-gold-dark" size={28} />
						<h2 data-ev-id="ev_1bc446cba2" className="font-display text-2xl md:text-3xl text-gold uppercase tracking-[0.15em]">
							Education
						</h2>
						<div data-ev-id="ev_6b81ed1656" className="h-px flex-1 bg-gradient-to-r from-gold-dark to-transparent" />
					</div>

					<div data-ev-id="ev_e9e42df2f6" className="flex flex-col gap-6">
						{education.map((edu) =>
            <div data-ev-id="ev_7d4a7f6083"
            key={edu.id}
            className="bg-ink-light border border-border-card rounded-lg p-6 md:p-8 hover:border-gold-dark/60 transition-colors">

								<div data-ev-id="ev_23bbf3065c" className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
									<div data-ev-id="ev_c3775d0592">
										<h3 data-ev-id="ev_5925df9de7" className="font-display text-xl text-gold">{edu.degree}</h3>
										<p data-ev-id="ev_d338e9bd57" className="text-parchment/80 font-body">{edu.school}</p>
									</div>
									<span data-ev-id="ev_57c13f224d" className="text-crimson-light font-display text-sm uppercase tracking-wider">
										{edu.year}
									</span>
								</div>
								<p data-ev-id="ev_ddecd5fa5c" className="text-parchment leading-relaxed">{edu.description}</p>
							</div>
            )}
					</div>
				</div>
			</AnimatedSection>

			{/* Projects Section */}
			<AnimatedSection className="py-24 px-6 bg-gradient-to-b from-ink-dark via-ink to-ink-dark">
				<div data-ev-id="ev_35494fae37" className="max-w-6xl mx-auto">
					{/* Section header */}
					<div data-ev-id="ev_584f2e2e3b" className="text-center mb-12">
						<h2 data-ev-id="ev_fb2fe84c9a" className="font-display text-3xl md:text-4xl text-gold uppercase tracking-[0.15em] mb-4">
							Explore My Work
						</h2>
						<p data-ev-id="ev_6a4b7ed282" className="text-parchment max-w-2xl mx-auto">Take a look at some of the recent projects I've worked on, showcasing my expertise in web design and development. Each project is a testament to my commitment to creating functional and visually appealing websites.

            </p>
					</div>

					{/* Projects grid */}
					<div data-ev-id="ev_c110b41666" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((project) =>
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)} />

            )}
					</div>
				</div>
			</AnimatedSection>

			{/* Contact Section */}
			<section data-ev-id="ev_a1429e9b58" className="py-24 px-6">
				<div data-ev-id="ev_e403cee249" className="max-w-2xl mx-auto bg-ink-light border border-border-card rounded-lg p-8 md:p-12 text-center">
					<h2 data-ev-id="ev_47fe8a6a77" className="font-display text-3xl md:text-4xl text-gold uppercase tracking-[0.15em] mb-4">
						Let's Work Together
					</h2>
					<p data-ev-id="ev_83e360863d" className="text-parchment mb-8">
						Have a project in mind or just want to say hello? I'd love to hear from you.
					</p>
					<a data-ev-id="ev_dac3c00de1"
          href="mailto:web.srdjan.marinkovic@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-crimson to-crimson-dark border border-gold-dark rounded-lg font-display text-gold uppercase tracking-wider hover:border-gold transition-all glow-gold-hover mb-8">

						<Mail size={18} />
						Email Me
					</a>
					<div data-ev-id="ev_ba25344a23" className="flex items-center justify-center gap-4">
						<a data-ev-id="ev_4485598c86"
            href="https://www.facebook.com/Sergijus/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover"
            aria-label="Facebook">

							<Facebook size={20} />
						</a>
						<a data-ev-id="ev_6cfa18e2bf"
            href="https://www.instagram.com/sergijus022/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover"
            aria-label="Instagram">

							<Instagram size={20} />
						</a>
						<a data-ev-id="ev_6bb192a3f3"
            href="https://www.linkedin.com/in/srdjan-marinkovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover"
            aria-label="LinkedIn">

							<Linkedin size={20} />
						</a>
						<a data-ev-id="ev_acbe2d00d6"
            href="mailto:web.srdjan.marinkovic@gmail.com"
            className="p-3 border border-gold-dark/50 rounded-lg text-gold hover:bg-gold/10 hover:border-gold/70 transition-all glow-gold-hover"
            aria-label="Email">

							<Mail size={20} />
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer data-ev-id="ev_320e8e66fc" className="py-12 px-6 border-t border-border-card">
				<div data-ev-id="ev_41625f92ba" className="max-w-4xl mx-auto text-center">
					<div data-ev-id="ev_fb49bbf066" className="flex items-center justify-center gap-4 mb-6">
						<div data-ev-id="ev_0304e97401" className="h-px w-16 bg-gradient-to-r from-transparent to-gold-dark" />
						<div data-ev-id="ev_657b3e09a7" className="w-2 h-2 rotate-45 bg-gold-dark" />
						<div data-ev-id="ev_dd3ad22c27" className="h-px w-16 bg-gradient-to-l from-transparent to-gold-dark" />
					</div>
					<p data-ev-id="ev_451224b5fd" className="font-display text-lg text-gold mb-2">Srdjan Marinkovic</p>
					<p data-ev-id="ev_9555ab70e3" className="text-parchment/60 text-sm">
						© {new Date().getFullYear()} · Built with passion and a bit of magic
					</p>
				</div>
			</footer>

			{/* Project Modal */}
			<ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

		</div>);

}

// Timeline item component
function TimelineItem({ job, index }: {job: typeof workExperience[0];index: number;}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}>

			{/* Timeline dot */}
			<div data-ev-id="ev_9559c2f394" className="absolute left-0 md:left-1/2 w-4 h-4 bg-crimson border-2 border-gold-dark rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-2 z-10 glow-gold" />

			{/* Content */}
			<div data-ev-id="ev_394957e4a6" className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
				<div data-ev-id="ev_b7cbadb375" className="bg-ink-light border border-border-card rounded-lg p-6 hover:border-gold-dark/60 transition-all">
					{/* Current badge */}
					{job.isCurrent &&
          <span data-ev-id="ev_04079eec1b" className="inline-block px-3 py-1 bg-crimson/20 text-crimson-light text-xs font-display uppercase tracking-wider rounded-full mb-3 border border-crimson/30">
							Current
						</span>
          }
					
					<h3 data-ev-id="ev_0bfff46c7a" className="font-display text-xl text-parchment mb-1">
						{job.company}
					</h3>
					<p data-ev-id="ev_94cd0cd79f" className="text-gold font-display text-sm uppercase tracking-wider mb-1">
						{job.role}
					</p>
					<p data-ev-id="ev_23257adb1d" className="text-crimson-light text-sm mb-3">
						{job.period}
						{job.location && <span data-ev-id="ev_0ff7a06730" className="text-parchment/50"> · {job.location}</span>}
					</p>
					<p data-ev-id="ev_1063059a81" className="text-parchment text-sm leading-relaxed">
						{job.description}
					</p>
				</div>
			</div>
		</motion.div>);

}

// Project card component
function ProjectCard({ project, onClick }: {project: Project;onClick: () => void;}) {
  return (
    <motion.button
      onClick={onClick}
      className="group text-left bg-ink-light border border-border-card rounded-lg overflow-hidden hover:border-gold-dark transition-all cursor-pointer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}>

			{/* Thumbnail area */}
			<div data-ev-id="ev_4f9aee76b8" className="h-48 bg-ink flex items-center justify-center border-b border-border-card overflow-hidden">
				{project.screenshotUrl ?
        <img data-ev-id="ev_d23cd6e8bd"
        src={project.screenshotUrl}
        alt={project.altText || project.title}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" /> :


        <div data-ev-id="ev_173d2e1bd8" className="text-center">
						<div data-ev-id="ev_d591c1fc6c" className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold-dark/20 flex items-center justify-center">
							<ExternalLink className="text-gold-dark" size={24} />
						</div>
						<span data-ev-id="ev_8a57bd526a" className="text-parchment/50 text-sm">Click to view</span>
					</div>
        }
			</div>

			{/* Info */}
			<div data-ev-id="ev_71e6775343" className="p-5">
				<h3 data-ev-id="ev_e9d63fae72" className="font-display text-lg text-gold mb-2 group-hover:text-gold-light transition-colors">
					{project.title}
				</h3>
				<p data-ev-id="ev_5cd2c046dc" className="text-parchment/80 text-sm line-clamp-2">
					{project.description}
				</p>
			</div>
		</motion.button>);

}