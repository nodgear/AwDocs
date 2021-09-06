import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/Header';
import Navbar from '../components/nav/Navbar';
import SubNavbar from '../components/subnav/SubNav';
import { useRouter } from 'next/router';

import { 
  project, 
  // title, 
  // Category,
  // FunctionPage as FunctionPageObject,
	// FunctionParameters,
	// FunctionReturns,
  // TablePage as TablePageObject,
  // category_types
 } from "../util/parsed";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const tabs = Object.entries(project);
  const activeTab = String(route.query.tab)
  const activeSubCategory = String(route.query.subcategory)

  return <div className="flex flex-col w-screen h-screen px-2 py-2 bg-[#161616]">
      <Header />
      <main className="flex flex-row w-full h-full overflow-y-hidden">
          <Navbar tabs={tabs} tab={activeTab} />
          {activeTab && project[activeTab] &&
              <SubNavbar activeTab={activeTab} subcategory={project[activeTab].subcategories} activeSub={activeSubCategory} />
          }
          <Component {...pageProps} />
      </main>
    </div>
}
export default MyApp
