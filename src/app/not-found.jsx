
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center" style={{ backgroundColor: '#dddd', height: 'calc(100vh - 13.7rem)' }}>
      <div className="text-center max-w-lg mx-auto p-4">
        <h1 className="text-7xl font-bold mb-4" style={{ color: '#4d4141' }}>
          404
        </h1>
        
        <h2 className="text-2xl font-semibold mb-3" style={{ color: '#4d4141' }}>
          Página não encontrada
        </h2>
        
        <p className="text-lg mb-6" style={{ color: '#4d4141' }}>
          A página que você digitou não existe. Verifique o endereço ou navegue para uma das opções abaixo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-12 py-4 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
            style={{ 
              color: '#4d4141',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            Página Inicial
          </Link>
          
          <Link 
            href="/get" 
            className="px-12 py-4 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105"
            style={{ 
              color: '#4d4141',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            Ver Personagens
          </Link>
        </div>
      </div>
    </div>
  );
}