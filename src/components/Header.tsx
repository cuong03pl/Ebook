'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<>
			{/* Top bar */}
			<div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="h-16 flex items-center justify-between">
						{/* Logo + brand */}
						<Link href="/" className="flex items-center gap-2">
							<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-green-400 grid place-items-center">
								<svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<div className="leading-tight">
								<div className="text-xl font-bold text-gray-900 dark:text-white">Tekbook</div>
								<div className="text-[11px] text-gray-500 dark:text-gray-400">Books here, stories there</div>
							</div>
						</Link>

						{/* Right side minimal (bell + user) */}
						<div className="flex items-center gap-4">
							{/* Dark mode toggle */}
							<ThemeToggle />
							
							<div className="flex items-center gap-2">
								<div className="w-8 h-8 rounded-full bg-blue-600 grid place-items-center">
									<span className="text-white text-xs font-semibold">KD</span>
								</div>
								<span className="hidden sm:inline text-sm text-gray-700 dark:text-gray-300">Kathleen Deska Pagana</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Navigation bar */}
			<div className="bg-gray-800 dark:bg-gray-950">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="h-12 flex items-center justify-between">
						<nav className="flex items-center gap-2">
							<Link href="/" className="px-4 py-2 rounded text-sm font-medium bg-red-600 text-white hover:bg-red-700">Trang chủ</Link>
							<Link href="/books" className="px-4 py-2 rounded text-sm font-medium text-gray-300 hover:text-white">Con gái</Link>
							<Link href="/categories" className="px-4 py-2 rounded text-sm font-medium text-gray-300 hover:text-white">Con trai</Link>
							<Link href="/about" className="px-4 py-2 rounded text-sm font-medium text-gray-300 hover:text-white">Anime</Link>
						</nav>

						{/* Search + actions */}
						<div className="flex items-center gap-4">
							<div className="relative hidden md:block">
								<input
									placeholder="Tìm kiếm..."
									className="w-64 h-8 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600"
								/>
								<span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
									<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</span>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


