/** @type {import('next').NextConfig} */
interface RemotePattern {
   protocol: string;
   hostname: string;
}

interface ImageConfig {
   domains: string[];
   remotePatterns: RemotePattern[];
}

interface WebpackConfig {
   module: {
      rules: any[];
   };
}

interface NextConfig {
   images: ImageConfig;
   webpack: (config: WebpackConfig) => WebpackConfig;
   turbopack?: {
      rules?: Record<string, any>;
      resolveAlias?: Record<string, any>;
   };
}

const nextConfig: NextConfig = {
   images: {
      domains: ["placeholder.svg"],
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
      ],
   },
   webpack: (config: WebpackConfig) => {
      config.module.rules.push({
         test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
         type: "asset/resource",
         generator: {
            filename: "static/media/[name].[hash:8][ext]",
         },
      });
      return config;
   },
   // Updated Turbopack configuration using the stable format and glob patterns
   turbopack: {
      rules: {
         // Add loader configuration for media files using glob patterns
         "*.mp4": ["file-loader"],
         "*.webm": ["file-loader"],
         "*.ogg": ["file-loader"],
         "*.mp3": ["file-loader"],
         "*.wav": ["file-loader"],
         "*.flac": ["file-loader"],
         "*.aac": ["file-loader"],
      },
   },
};

export default nextConfig;
