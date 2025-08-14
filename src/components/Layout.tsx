import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from './ThemeProvider';

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<ThemeProvider>
			<div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
				<Header />
				<main className="flex-1 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">{children}</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}


