// index.d.ts

declare module 'librery-npm-test' {
    import React from 'react';
  
    // Definición de la interfaz para el componente ButtonControl
    export interface ButtonComponentProps {
      onClick: () => void;
      backgroundColor?: string;
      color?: string;
      children: React.ReactNode;
    }
  
    // Declaración del componente ButtonControl
    export const ButtonControl: React.FC<ButtonComponentProps>;
  
    // Definición de la interfaz para el componente TextControl
    export interface TextComponentProps {
      // Propiedades específicas de TextControl
    }
  
    // Declaración del componente TextControl
    export const TextControl: React.FC<TextComponentProps>;
  
    // Otros componentes y declaraciones de tipos
  
    // Exporta los tipos necesarios para usarlos en otros proyectos
  }