
    // 1. Array de objetos para manejar datos complejos
    const planetas = [
      { nombre: "Mercurio", desc: "El planeta más pequeño y cercano al Sol." },
      { nombre: "Venus", desc: "Tiene una atmósfera densa y atrapa mucho calor." },
      { nombre: "Tierra", desc: "Nuestro hogar, el único con vida confirmada." },
      { nombre: "Marte", desc: "El planeta rojo, hogar de grandes volcanes." },
      { nombre: "Júpiter", desc: "El gigante gaseoso más grande del sistema." },
      { nombre: "Saturno", desc: "Famoso por su espectacular sistema de anillos." },
      { nombre: "Urano", desc: "Un gigante de hielo que rota de lado." },
      { nombre: "Neptuno", desc: "El planeta más lejano y azotado por vientos." },
      { nombre: "Plutón", desc: "Reclasificado como planeta enano en 2006." }
    ];

    const listaUl = document.getElementById('lista-planetas');
    const infoContent = document.getElementById('info-content');
    const placeholder = document.getElementById('placeholder-text');
    const infoTitulo = document.getElementById('info-titulo');
    const infoDesc = document.getElementById('info-desc');

    // 2. Iterar con for-of
    for (const p of planetas) {
      const li = document.createElement('li');
      li.className = "cursor-pointer bg-slate-700 hover:bg-blue-600 p-3 rounded-xl transition-all hover:translate-x-2 shadow-md";
      li.textContent = p.nombre;

      // 3. Añadir interacción de clic
      li.onclick = () => {
        mostrarDetalle(p);
      };

      listaUl.appendChild(li);
    }

    function mostrarDetalle(planeta) {
      // Ocultar placeholder y mostrar info
      placeholder.classList.add('hidden');
      infoContent.classList.remove('hidden');

      // Actualizar textos
      infoTitulo.textContent = planeta.nombre;
      infoDesc.textContent = planeta.desc;
      
      console.log(`Mostrando info de: ${planeta.nombre}`);
    }
  
