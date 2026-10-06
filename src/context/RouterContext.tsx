import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export type AppRoute = string;

interface RouterContextType {
  currentPath: AppRoute;
  navigate: (to: string, params?: Record<string, string>) => void;
  queryParams: Record<string, string>;
}

const RouterContext = createContext<RouterContextType | null>(null);

function normalizePath(rawPath: string): AppRoute {
  // Strip trailing slashes and hash
  const clean = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  
  if (clean === '/about') return '/about';
  if (clean === '/services') return '/services';
  if (clean === '/pricing') return '/pricing';
  if (clean === '/contact') return '/contact';
  if (clean === '/appointment') return '/appointment';

  // Dedicated Service Landing Page Routes
  if (clean.startsWith('/services/')) return clean;

  return '/';
}

function parseQuery(search: string): Record<string, string> {
  const params: Record<string, string> = {};
  if (!search) return params;
  const queryString = search.startsWith('?') ? search.slice(1) : search;
  const pairs = queryString.split('&');
  for (const pair of pairs) {
    const [k, v] = pair.split('=');
    if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
  }
  return params;
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<AppRoute>(() => {
    return normalizePath(window.location.pathname);
  });

  const [queryParams, setQueryParams] = useState<Record<string, string>>(() => {
    return parseQuery(window.location.search);
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      setQueryParams(parseQuery(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string, params?: Record<string, string>) => {
    let url = to;
    if (params) {
      const searchParams = new URLSearchParams(params);
      const queryStr = searchParams.toString();
      if (queryStr) {
        url += (to.includes('?') ? '&' : '?') + queryStr;
      }
    }

    const norm = normalizePath(to);
    window.history.pushState({}, '', url);
    setCurrentPath(norm);
    setQueryParams(params || parseQuery(window.location.search));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const value = useMemo(
    () => ({
      currentPath,
      navigate,
      queryParams,
    }),
    [currentPath, queryParams]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const Link: React.FC<{
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  title?: string;
}> = ({ to, className, children, onClick, ariaLabel, title }) => {
  const { navigate, currentPath } = useRouter();
  const isActive = currentPath === normalizePath(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    onClick?.();
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      aria-current={isActive ? 'page' : undefined}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </a>
  );
};
