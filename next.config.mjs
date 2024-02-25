/** @type {import('next').NextConfig} */
const nextConfig = {    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 's1.static.brasilescola.uol.com.br',
            port: '',
          },        {
            protocol: 'https',
            hostname: 'static.biologianet.com',
            port: '',
          },

                {
            protocol: 'https',
            hostname: 's1.static.brasilescola.uol.com.br',
            port: '',
          },        {
            protocol: 'https',
            hostname: 's4.static.brasilescola.uol.com.br',
            port: '',
          },
        {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
          },
 ],}, };

export default nextConfig;
