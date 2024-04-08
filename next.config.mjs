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
          {
            protocol: 'https',
            hostname: 'woafrzymxudngxbeudts.supabase.co',
            port: '',
          },
      

          {
            protocol : 'https',   
            hostname: 'mol.icb.usp.br',
            port: '',
          },
          {
            protocol : 'https',
            hostname: 'editora.pucrs.br',
            port: '',
          
          },
 ],}, };

export default nextConfig;
