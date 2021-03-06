import { useEffect, useState, memo } from 'react';

import { api } from '../services/api';

import '../styles/header.scss';

interface HeaderProps {
  selectedGenreId: number;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

function HeaderElement({ selectedGenreId }: HeaderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}

export const Header = memo(HeaderElement);