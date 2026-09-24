import type { BlogLink } from "@/lib/blogTypes";

const guide = (slug: string, label: string, description: string): BlogLink => ({ href: `/blog/${slug}`, label, description });

export const serviceGuideLinks: Record<string, BlogLink[]> = {
  "custom-business-software": [guide("when-business-outgrows-spreadsheets", "When a business outgrows spreadsheets", "Recognize operational friction and compare realistic replacement paths."), guide("what-determines-custom-software-cost", "What determines custom software cost", "Understand the scope and uncertainty behind an estimate."), guide("prepare-for-software-development-estimate", "Prepare for a software estimate", "Bring the context that makes an estimate useful.")],
  "mvp-development": [guide("what-should-an-mvp-include", "What should an MVP include?", "Scope a coherent first release without shipping a broken prototype."), guide("prepare-for-software-development-estimate", "Prepare for a software estimate", "Define the problem, users, workflow, and launch priorities.")],
  "mobile-app-development": [guide("mobile-app-vs-web-app-for-business", "Mobile app vs web app", "Choose from user context and capability rather than fashion."), guide("mobile-app-for-existing-web-platform", "Add mobile to an existing platform", "Assess backend reuse and mobile-specific workflows."), guide("can-mobile-app-use-existing-backend-api", "Can mobile reuse an existing backend?", "Review API, identity, reliability, and versioning readiness.")],
  "react-native-development": [guide("react-native-vs-native-business-app", "React Native vs native business apps", "Compare platform needs, team shape, and long-term ownership."), guide("can-mobile-app-use-existing-backend-api", "Connect mobile to an existing API", "Understand the server contract a production app needs.")],
  "saas-development": [guide("how-web-mobile-backend-work-together", "How web, mobile, and backend work together", "A plain-language guide to connected product architecture."), guide("mobile-app-for-existing-web-platform", "Plan a mobile platform extension", "Reuse the right platform components without copying the website.")],
  "backend-api-development": [guide("can-mobile-app-use-existing-backend-api", "Can mobile reuse an existing backend?", "Audit API coverage, security, and network behaviour."), guide("how-web-mobile-backend-work-together", "How product systems work together", "Separate client, backend, data, and operational responsibilities.")],
  "web-app-development": [guide("mobile-app-vs-web-app-for-business", "Mobile app vs web app", "Match the interface to its users and context."), guide("rewrite-vs-modernize-existing-software", "Rewrite or modernize existing software?", "Choose a staged transition when it reduces risk.")],
};

export const solutionGuideLinks: Record<string, BlogLink[]> = {
  "replace-spreadsheets-with-custom-software": [guide("when-business-outgrows-spreadsheets", "When a business outgrows spreadsheets", "An educational test for deciding whether replacement is justified.")],
  "build-an-app-for-my-business": [guide("mobile-app-vs-web-app-for-business", "Mobile app vs web app", "Choose the right interface before fixing the scope."), guide("prepare-for-software-development-estimate", "Prepare for a software estimate", "Build a concise, decision-ready project brief.")],
  "build-an-mvp": [guide("what-should-an-mvp-include", "What should an MVP include?", "Define the complete core workflow and what belongs later.")],
  "mobile-app-for-existing-web-platform": [guide("mobile-app-for-existing-web-platform", "Plan mobile for an existing platform", "Audit architecture, identity, API coverage, and release needs."), guide("how-web-mobile-backend-work-together", "How product systems work together", "Understand the shared platform beneath multiple clients.")],
  "connect-mobile-app-to-existing-backend": [guide("can-mobile-app-use-existing-backend-api", "Can mobile use an existing backend?", "A technical readiness guide for a production integration.")],
  "custom-software-cost": [guide("what-determines-custom-software-cost", "What determines custom software cost?", "Understand interfaces, workflows, integrations, data, and risk."), guide("prepare-for-software-development-estimate", "Prepare for a software estimate", "Bring the information that improves estimate confidence.")],
  "modernize-existing-software": [guide("rewrite-vs-modernize-existing-software", "Rewrite or modernize?", "Compare incremental change with a full replacement.")],
};

export const industryGuideLinks: Record<string, BlogLink[]> = {
  "trades-service-businesses": [guide("when-business-outgrows-spreadsheets", "When a business outgrows spreadsheets", "Evaluate connected customer, job, document, and payment workflows."), guide("mobile-app-vs-web-app-for-business", "Mobile app vs web app", "Choose interfaces for field and office work."), guide("prepare-for-software-development-estimate", "Prepare for a software estimate", "Describe the workflow and constraints behind the requirement.")],
  "pubs-entertainment-venues": [guide("how-web-mobile-backend-work-together", "How platform components work together", "Understand shared event data across web, mobile, and display clients."), guide("mobile-app-for-existing-web-platform", "Plan a mobile platform extension", "Assess API reuse, notifications, and mobile workflows.")],
  "clubs-member-organizations": [guide("how-web-mobile-backend-work-together", "How platform components work together", "Connect member, event, admin, and mobile experiences."), guide("mobile-app-for-existing-web-platform", "Plan a mobile platform extension", "Extend an existing member platform through a stable API.")],
};

export const productGuideLinks: Record<string, BlogLink[]> = {
  tradesmate: [guide("when-business-outgrows-spreadsheets", "When operational spreadsheets stop scaling", "Compare spreadsheet improvement, off-the-shelf tools, and connected software.")],
  pubplay: [guide("how-web-mobile-backend-work-together", "How web, mobile, and backend systems work together", "See the architecture principles behind connected product interfaces.")],
  "come-together": [guide("mobile-app-for-existing-web-platform", "How to add mobile to an existing web platform", "Plan shared accounts, API work, and mobile-specific workflows.")],
};
