import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api/prototype': {
				target: 'http://localhost:52773',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/prototype/, '/api/prototype')
			},
			'/api/v1/condition': {
				target: 'https://dev-hub.zicare.id',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/v1\/condition/, '/api/v1/condition')
			}
		}
	}
});
