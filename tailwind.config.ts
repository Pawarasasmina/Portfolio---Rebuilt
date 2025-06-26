
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cyberpunk neon colors
				neon: {
					cyan: '#00FFFF',
					magenta: '#FF00FF',
					purple: '#9D00FF',
					green: '#00FF41',
					blue: '#0080FF',
					pink: '#FF0080',
					yellow: '#FFFF00',
					orange: '#FF8000'
				},
				cyber: {
					dark: '#0A0A0F',
					darker: '#050508',
					gray: '#1A1A2E',
					blue: '#16213E',
					purple: '#0F0F23'
				}
			},
			fontFamily: {
				orbitron: ['Orbitron', 'monospace'],
				'share-tech': ['Share Tech Mono', 'monospace'],
				mono: ['Share Tech Mono', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				glitch: {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'text-glow': {
					'0%, 100%': { textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
					'50%': { textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' }
				},
				'border-glow': {
					'0%, 100%': { boxShadow: '0 0 10px #00FFFF, inset 0 0 10px rgba(0, 255, 255, 0.1)' },
					'50%': { boxShadow: '0 0 20px #00FFFF, inset 0 0 20px rgba(0, 255, 255, 0.2)' }
				},
				typing: {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'cursor-blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				starfield: {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-2000px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				glitch: 'glitch 0.3s ease-in-out infinite',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				float: 'float 3s ease-in-out infinite',
				'text-glow': 'text-glow 2s ease-in-out infinite',
				'border-glow': 'border-glow 2s ease-in-out infinite',
				typing: 'typing 3.5s steps(40, end)',
				'cursor-blink': 'cursor-blink 1s infinite',
				starfield: 'starfield 50s linear infinite'
			},
			backdropBlur: {
				xs: '2px'
			},
			boxShadow: {
				'neon-cyan': '0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 60px #00FFFF',
				'neon-magenta': '0 0 20px #FF00FF, 0 0 40px #FF00FF, 0 0 60px #FF00FF',
				'neon-green': '0 0 20px #00FF41, 0 0 40px #00FF41, 0 0 60px #00FF41'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
