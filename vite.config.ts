import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "node:path";
import tsconfigPaths from 'vite-tsconfig-paths';
import sitemap from 'vite-plugin-sitemap';
import compression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		compression(),
		sitemap({
			hostname: 'https://idaczerwcowa.pl/', // todo
		}),
		ViteImageOptimizer({
			test: /\.(jpe?g|png|gif|svg|webp|avif)$/i,
			include: /\.(jpe?g|png|gif|svg|webp|avif)$/i,
			exclude: /node_modules/,
			jpg: {
				quality: 80,
				progressive: true,
			},
			jpeg: {
				quality: 80,
				progressive: true,
			},
			png: {
				quality: 80,
				progressive: true,
			},
			webp: {
				quality: 80,
				lossless: false,
				nearLossless: false,
			},
			avif: {
				quality: 80,
				lossless: false,
			},
		}),
	],
	base: "/",
	build: {
		outDir: "dist",
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					react: ['react', 'react-dom'],
				}
			}
		}
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	}
});