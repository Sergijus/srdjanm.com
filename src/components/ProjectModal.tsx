import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  screenshotUrl?: string;
  websiteUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
			{project &&
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>

					{/* Backdrop */}
					<motion.div
          className="absolute inset-0 bg-ink-dark/90 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} />


					{/* Modal */}
					<motion.div
          className="relative w-full max-w-4xl max-h-[90vh] bg-ink rounded-lg overflow-hidden border border-gold/30 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}>

						{/* Header */}
						<div data-ev-id="ev_9d5bd215b5" className="sticky top-0 z-10 flex items-center justify-between p-6 bg-ink border-b border-gold/20">
							<h2 data-ev-id="ev_6a76a4f0c4" className="font-display text-2xl md:text-3xl text-gold">
								{project.title}
							</h2>
							<button data-ev-id="ev_3f89005fec"
            onClick={onClose}
            className="p-2 text-parchment/60 hover:text-gold transition-colors cursor-pointer"
            aria-label="Close modal">

								<X size={24} />
							</button>
						</div>

						{/* Content */}
						<div data-ev-id="ev_b4d0db4598" className="overflow-y-auto max-h-[calc(90vh-140px)]">
							{/* Screenshot area */}
							{project.screenshotUrl ?
            <div data-ev-id="ev_06d1a673ae" className="p-4 bg-ink-light">
									<img data-ev-id="ev_7c2c30ce01"
              src={project.screenshotUrl}
              alt={`${project.title} screenshot`}
              className="w-full h-auto rounded border border-gold/10" />

								</div> :

            <div data-ev-id="ev_7fe9f82dee" className="p-4 bg-ink-light">
									<div data-ev-id="ev_5eb91c89a5" className="w-full h-64 rounded border border-gold/10 bg-ink flex items-center justify-center">
										<span data-ev-id="ev_cd66045960" className="text-parchment/40 font-body italic">
											Screenshot coming soon...
										</span>
									</div>
								</div>
            }

							{/* Description */}
							<div data-ev-id="ev_d203ebf63b" className="p-6">
								<p data-ev-id="ev_e656e2f2c2" className="text-parchment/90 font-body text-lg leading-relaxed mb-6">
									{project.description}
								</p>

								{project.websiteUrl &&
              <a data-ev-id="ev_69b03929da"
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-parchment font-display text-sm uppercase tracking-wider rounded border border-gold/30 hover:bg-crimson-light hover:border-gold/50 transition-all glow-gold-hover cursor-pointer">

										<ExternalLink size={16} />
										Visit Website
									</a>
              }
							</div>
						</div>
					</motion.div>
				</motion.div>
      }
		</AnimatePresence>);

}