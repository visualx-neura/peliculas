import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = 'https://xyanlccvqyvydrhugkrl.supabase.co'; // Tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5YW5sY2N2cXl2eWRyaHVna3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc4Njg3MzYsImV4cCI6MjA1MzQ0NDczNn0.KxDiNIhhWA_Yj0d7sx2MjCmUigtDn5-4YGdauYu3uk4'; // Tu clave de API pública de Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);

// Función para obtener el usuario actual
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error al obtener el usuario:', error.message);
    return null;
  }

  return user; // Devuelve el usuario autenticado (o null si no hay ninguno)
};



