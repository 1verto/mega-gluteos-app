// ==========================================
// CONFIGURACIÓN GLOBAL
// ==========================================
const PASSWORD_CORRECTA = "1verto";
const totalDays = 21;
let progress = JSON.parse(localStorage.getItem("megaGluteosProgress")) || [];

// ==========================================
// ELEMENTOS DEL DOM
// ==========================================
// Login
const loginScreen = document.getElementById("login-screen");
const appScreen = document.getElementById("app-screen");
const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const loginError = document.getElementById("login-error");

// Tabs & Navigation
const navItems = document.querySelectorAll(".nav-item");
const tabContents = document.querySelectorAll(".tab-content");
const headerTitle = document.getElementById("header-title");

// Rutinas y Modal
const routinesList = document.getElementById("routines-list");
const routineModal = document.getElementById("routine-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modalDay = document.getElementById("modal-day");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const completeDayBtn = document.getElementById("complete-day-btn");

// Progreso
const mainProgressBar = document.getElementById("main-progress-bar");
const daysCompletedText = document.getElementById("days-completed-text");
const progressGiantNumber = document.getElementById("progress-giant-number");
const resetBtn = document.getElementById("reset-btn");

let currentSelectedDay = null;

// ==========================================
// INICIALIZACIÓN
// ==========================================
function init() {
  checkLoginStatus();
  renderRoutines();
  updateProgressUI();
}

// ==========================================
// SISTEMA DE LOGIN
// ==========================================
function checkLoginStatus() {
  const isLogged = localStorage.getItem("megaGluteosLogged");
  if (isLogged) {
    loginScreen.classList.remove("active");
    appScreen.classList.add("active");
  }
}

loginBtn.addEventListener("click", () => {
  if (passwordInput.value.toLowerCase().trim() === PASSWORD_CORRECTA) {
    localStorage.setItem("megaGluteosLogged", "true");
    loginError.style.display = "none";
    loginScreen.classList.remove("active");
    appScreen.classList.add("active");
  } else {
    loginError.style.display = "block";
    passwordInput.style.borderColor = "#E53E3E";
  }
});

// ==========================================
// SISTEMA DE NAVEGACIÓN (TABS)
// ==========================================
navItems.forEach(item => {
  item.addEventListener("click", () => {
    // Quitar active de todos los botones y tabs
    navItems.forEach(nav => nav.classList.remove("active"));
    tabContents.forEach(tab => tab.classList.remove("active"));
    
    // Poner active al seleccionado
    item.classList.add("active");
    const targetId = item.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");
    
    // Cambiar título del header
    headerTitle.textContent = item.getAttribute("data-title");
  });
});

// ==========================================
// RENDERIZAR RUTINAS
// ==========================================
function renderRoutines() {
  routinesList.innerHTML = "";
  
  // Calcular el día máximo accesible (el último completado de forma secuencial + 1)
  let highestCompleted = 0;
  for (let i = 1; i <= 22; i++) {
    if (progress.includes(i)) {
      highestCompleted = i;
    } else {
      break; 
    }
  }
  const maxAccessibleDay = highestCompleted + 1;

  routinesData.forEach(routine => {
    const isCompleted = progress.includes(routine.day);
    const isLocked = routine.day > maxAccessibleDay;
    
    const card = document.createElement("div");
    card.className = `routine-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;
    
    if (isLocked) {
      card.style.opacity = "0.5";
      card.style.cursor = "not-allowed";
      card.innerHTML = `
        <div class="routine-info">
          <span class="day" style="color:#aaa;"><i class="fas fa-lock"></i> Día ${routine.day}</span>
          <h3 style="color:#aaa;">${routine.title}</h3>
        </div>
        <div class="routine-status">
          <i class="fas fa-lock" style="color:#aaa;"></i>
        </div>
      `;
      card.addEventListener("click", () => {
        alert(`🔒 Día Bloqueado\n\nDebes marcar como completado el Día ${routine.day - 1} para poder acceder a esta rutina. ¡Paso a paso!`);
      });
    } else {
      card.innerHTML = `
        <div class="routine-info">
          <span class="day">Día ${routine.day}</span>
          <h3>${routine.title}</h3>
        </div>
        <div class="routine-status">
          <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'}"></i>
        </div>
      `;
      card.addEventListener("click", () => openRoutineModal(routine));
    }
    
    routinesList.appendChild(card);
  });
}

// ==========================================
// MODAL DE RUTINAS
// ==========================================
function openRoutineModal(routine) {
  currentSelectedDay = routine.day;
  modalDay.textContent = `DÍA ${routine.day}`;
  modalTitle.textContent = routine.title;
  modalBody.innerHTML = routine.content;
  
  if (progress.includes(routine.day)) {
    completeDayBtn.textContent = "Completado ✓";
    completeDayBtn.style.background = "#00E5FF";
    completeDayBtn.style.color = "#111";
  } else {
    completeDayBtn.textContent = "Marcar como Completado";
    completeDayBtn.style.background = "#FF107A";
    completeDayBtn.style.color = "white";
  }
  
  routineModal.classList.add("open");
  
  if (routine.day === 1) {
    initDay1Forms();
  } else if (routine.day === 2) {
    initDay2Forms();
  } else if (routine.day === 3) {
    initDay3Forms();
  } else if (routine.day === 4) {
    initDay4Forms();
  } else if (routine.day === 5) {
    initDay5Forms();
  } else if (routine.day === 6) {
    initDay6Forms();
  } else if (routine.day === 7) {
    initDay7Forms();
  } else if (routine.day === 8) {
    initDay8Forms();
  } else if (routine.day === 9) {
    initDay9Forms();
  } else if (routine.day === 10) {
    initDay10Forms();
  } else if (routine.day === 11) {
    initDay11Forms();
  } else if (routine.day === 12) {
    initDay12Forms();
  } else if (routine.day === 13) {
    initDay13Forms();
  } else if (routine.day === 14) {
    initDay14Forms();
  } else if (routine.day === 15) {
    initDay15Forms();
  } else if (routine.day === 16) {
    initDay16Forms();
  } else if (routine.day === 17) {
    initDay17Forms();
  } else if (routine.day === 18) {
    initDay18Forms();
  } else if (routine.day === 19) {
    initDay19Forms();
  } else if (routine.day === 20) {
    initDay20Forms();
  } else if (routine.day === 21) {
    initDay21Forms();
  } else if (routine.day === 22) {
    initDay22Forms();
  }
}

closeModalBtn.addEventListener("click", () => {
  routineModal.classList.remove("open");
});

completeDayBtn.addEventListener("click", () => {
  if (!progress.includes(currentSelectedDay)) {
    // Validar que todos los checkboxes del día estén marcados
    const dayCheckboxes = document.querySelectorAll('.modal-body input[type="checkbox"]');
    if (dayCheckboxes.length > 0) {
      const allChecked = Array.from(dayCheckboxes).every(cb => cb.checked);
      if (!allChecked) {
        alert("¡Aún no has terminado! 💪\n\nDebes marcar todos los ejercicios como LOGRADOS antes de poder completar el día.");
        return; // Detener la ejecución
      }
    }

    progress.push(currentSelectedDay);
    localStorage.setItem("megaGluteosProgress", JSON.stringify(progress));
    renderRoutines();
    updateProgressUI();
    
    completeDayBtn.textContent = "Completado ✓";
    completeDayBtn.style.background = "#00E5FF";
    completeDayBtn.style.color = "#111";
    
    // Cerrar modal automáticamente después de medio segundo
    setTimeout(() => {
      routineModal.classList.remove("open");
    }, 600);
  }
});

// ==========================================
// PROGRESO
// ==========================================
function updateProgressUI() {
  const totalDays = routinesData.length;
  const completedDays = progress.length;
  const percentage = Math.round((completedDays / totalDays) * 100);
  
  mainProgressBar.style.width = `${percentage}%`;
  daysCompletedText.textContent = `${completedDays}/${totalDays} días completados`;
  progressGiantNumber.textContent = `${percentage}%`;
}

resetBtn.addEventListener("click", () => {
  if(confirm("¿Estás segura de que quieres borrar todo tu progreso y volver a empezar?")) {
    progress = [];
    localStorage.removeItem("megaGluteosProgress");
    renderRoutines();
    updateProgressUI();
  }
});

// Arrancar App
init();

// ==========================================
// LÓGICA DÍA 1 (FORMULARIOS)
// ==========================================
function initDay1Forms() {
  const inputs = [
    'gluteos-input', 'cintura-input', 'peso-input',
    'test-sentadillas', 'test-plancha', 'test-elevaciones',
    'smart-s', 'smart-m', 'smart-a', 'smart-r', 'smart-t'
  ];
  
  // Cargar datos guardados
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay1')) || {};
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el && savedData[id]) {
      el.value = savedData[id];
    }
  });
  
  // Botón guardar textos
  const saveBtn = document.getElementById('save-day1-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const dataToSave = JSON.parse(localStorage.getItem('megaGluteosDay1')) || {};
      inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) dataToSave[id] = el.value;
      });
      localStorage.setItem('megaGluteosDay1', JSON.stringify(dataToSave));
      
      saveBtn.textContent = "¡Guardado con éxito!";
      saveBtn.style.background = "#00E676"; // verde
      saveBtn.style.color = "white";
      saveBtn.style.borderColor = "#00E676";
      setTimeout(() => {
        saveBtn.textContent = "Guardar mi Evaluación";
        saveBtn.style.background = "#FF107A";
        saveBtn.style.borderColor = "#FF107A";
      }, 2000);
    });
  }
  
  // Lógica de Fotos (FileReader a Base64)
  const photoInputs = ['photo-frente', 'photo-perfil', 'photo-espalda'];
  photoInputs.forEach(id => {
    const el = document.getElementById(id);
    const lbl = document.getElementById('lbl-' + id);
    if (!el || !lbl) return;
    
    // Cargar si ya hay foto guardada
    if (savedData[id]) {
      lbl.style.backgroundImage = `url(${savedData[id]})`;
      lbl.classList.add('has-photo');
    }
    
    el.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Str = event.target.result;
        lbl.style.backgroundImage = `url(${base64Str})`;
        lbl.classList.add('has-photo');
        
        // Guardar foto en localStorage
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay1')) || {};
        currentData[id] = base64Str;
        
        try {
          localStorage.setItem('megaGluteosDay1', JSON.stringify(currentData));
        } catch (e) {
          alert("¡La imagen es muy pesada! Por favor, intenta subir una foto recortada o con menor resolución.");
          lbl.style.backgroundImage = "none";
          lbl.classList.remove('has-photo');
        }
      };
      reader.readAsDataURL(file);
    });
  });
}

// ==========================================
// LÓGICA DÍA 2 (CHECKBOXES)
// ==========================================
function initDay2Forms() {
  const checkboxes = ['d2-ex1', 'd2-ex2', 'd2-ex3', 'd2-ex4', 'd2-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay2')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay2')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay2', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 3 (CHECKBOXES)
// ==========================================
function initDay3Forms() {
  const checkboxes = ['d3-ex1', 'd3-ex2', 'd3-ex3', 'd3-ex4', 'd3-ex5', 'd3-ex6', 'd3-ex7'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay3')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay3')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay3', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 4 (CHECKBOXES)
// ==========================================
function initDay4Forms() {
  const checkboxes = ['d4-ex1', 'd4-ex2', 'd4-ex3', 'd4-ex4', 'd4-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay4')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay4')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay4', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 5 (CHECKBOXES)
// ==========================================
function initDay5Forms() {
  const checkboxes = ['d5-ex1'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay5')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay5')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay5', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 6 (CHECKBOXES)
// ==========================================
function initDay6Forms() {
  const checkboxes = ['d6-ex1', 'd6-ex2', 'd6-ex3', 'd6-ex4', 'd6-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay6')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay6')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay6', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 7 (FORMULARIOS Y CHECKBOXES)
// ==========================================
function initDay7Forms() {
  const checkboxes = ['d7-ex1', 'd7-ex2', 'd7-ex3', 'd7-ex4', 'd7-ex5'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay7Check')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay7Check')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay7Check', JSON.stringify(currentData));
      });
    }
  });

  // Lógica de Mediciones
  const inputs = ['gluteos-d7-input', 'cintura-d7-input', 'peso-d7-input'];
  const basePrefix = ['gluteos-input', 'cintura-input', 'peso-input'];
  
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay7')) || {};
  const day1Data = JSON.parse(localStorage.getItem('megaGluteosDay1')) || {};

  function calcDiff(day1Val, day7Val, elId) {
    const diffEl = document.getElementById(elId);
    if (!diffEl) return;
    if (day1Val && day7Val) {
      const diff = parseFloat(day7Val) - parseFloat(day1Val);
      if (diff > 0) {
        diffEl.textContent = "(+" + diff.toFixed(1) + " desde Día 1)";
        diffEl.style.color = "#FF3B30"; // Rojo
      } else if (diff < 0) {
        diffEl.textContent = "(" + diff.toFixed(1) + " desde Día 1)";
        diffEl.style.color = "#00E676"; // Verde
      } else {
        diffEl.textContent = "(Sin cambios)";
        diffEl.style.color = "#888";
      }
      
      // Regla especial para glúteos: ¡subir es bueno!
      if (elId === 'gluteos-d7-diff') {
        if (diff > 0) diffEl.style.color = "#00E676"; 
        else if (diff < 0) diffEl.style.color = "#FF3B30";
      }
    } else {
      diffEl.textContent = "Faltan datos del Día 1";
      diffEl.style.color = "#FF3B30";
    }
  }

  inputs.forEach((id, index) => {
    const el = document.getElementById(id);
    if (el && savedData[id]) {
      el.value = savedData[id];
      calcDiff(day1Data[basePrefix[index]], savedData[id], id.replace('-input', '-diff'));
    }
  });

  const saveBtn = document.getElementById('save-day7-medidas');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const dataToSave = JSON.parse(localStorage.getItem('megaGluteosDay7')) || {};
      inputs.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          dataToSave[id] = el.value;
          calcDiff(day1Data[basePrefix[index]], el.value, id.replace('-input', '-diff'));
        }
      });
      localStorage.setItem('megaGluteosDay7', JSON.stringify(dataToSave));
      
      saveBtn.textContent = "¡Guardado!";
      saveBtn.style.background = "#00E676"; 
      saveBtn.style.color = "white";
      saveBtn.style.borderColor = "#00E676";
      setTimeout(() => {
        saveBtn.textContent = "Comparar y Guardar";
        saveBtn.style.background = "#FF107A";
        saveBtn.style.borderColor = "#FF107A";
      }, 2000);
    });
  }
}

// ==========================================
// LÓGICA DÍA 8 (CHECKBOXES)
// ==========================================
function initDay8Forms() {
  const checkboxes = ['d8-ex1', 'd8-ex2', 'd8-ex3', 'd8-ex4', 'd8-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay8')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay8')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay8', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 9 (CHECKBOXES)
// ==========================================
function initDay9Forms() {
  const checkboxes = ['d9-ex1', 'd9-ex2', 'd9-ex3', 'd9-ex4', 'd9-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay9')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay9')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay9', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 10 (CHECKBOXES)
// ==========================================
function initDay10Forms() {
  const checkboxes = ['d10-ex1', 'd10-ex2', 'd10-ex3', 'd10-ex4', 'd10-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay10')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay10')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay10', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 11 (CHECKBOXES)
// ==========================================
function initDay11Forms() {
  const checkboxes = ['d11-ex1', 'd11-ex2', 'd11-ex3', 'd11-ex4', 'd11-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay11')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay11')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay11', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 12 (CHECKBOXES)
// ==========================================
function initDay12Forms() {
  const checkboxes = ['d12-ex1', 'd12-ex2', 'd12-ex3', 'd12-ex4'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay12')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay12')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay12', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 13 (CHECKBOXES)
// ==========================================
function initDay13Forms() {
  const checkboxes = ['d13-ex1', 'd13-ex2', 'd13-ex3', 'd13-ex4', 'd13-ex5'];
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay13')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedData[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay13')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay13', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 14 (CHECKBOXES Y MEDIDAS)
// ==========================================
function initDay14Forms() {
  // 1. Checkboxes
  const checkboxes = ['d14-ex1', 'd14-ex2', 'd14-ex3', 'd14-ex4', 'd14-ex5'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay14Check')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay14Check')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay14Check', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 15 (EVALUACIÓN Y CHECKBOXES)
// ==========================================
function initDay15Forms() {
  // 1. Checkboxes
  const checkboxes = ['d15-ex1', 'd15-ex2', 'd15-ex3'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay15Check')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay15Check')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay15Check', JSON.stringify(currentData));
      });
    }
  });

  // 2. Medidas (Comparación con Día 1)
  const inputs = ['gluteos-d15-input', 'cintura-d15-input', 'peso-d15-input'];
  const basePrefix = ['gluteos-input', 'cintura-input', 'peso-input'];
  
  const savedData = JSON.parse(localStorage.getItem('megaGluteosDay15')) || {};
  const day1Data = JSON.parse(localStorage.getItem('megaGluteosDay1')) || {};

  function calcDiff(day1Val, day15Val, elId) {
    const diffEl = document.getElementById(elId);
    if (!diffEl) return;
    if (day1Val && day15Val) {
      const diff = parseFloat(day15Val) - parseFloat(day1Val);
      if (diff > 0) {
        diffEl.textContent = "(+" + diff.toFixed(1) + " desde Día 1)";
        diffEl.style.color = "#FF3B30"; 
      } else if (diff < 0) {
        diffEl.textContent = "(" + diff.toFixed(1) + " desde Día 1)";
        diffEl.style.color = "#00E676"; 
      } else {
        diffEl.textContent = "(Sin cambios)";
        diffEl.style.color = "#888";
      }
      
      if (elId === 'gluteos-d15-diff') {
        if (diff > 0) diffEl.style.color = "#00E676";
        else if (diff < 0) diffEl.style.color = "#FF3B30";
      }
    } else {
      diffEl.textContent = "";
    }
  }

  inputs.forEach((id, index) => {
    const el = document.getElementById(id);
    const diffId = id.replace('-input', '-diff');
    const day1Key = basePrefix[index];
    
    if (el) {
      if (savedData[id]) {
        el.value = savedData[id];
        calcDiff(day1Data[day1Key], savedData[id], diffId);
      }
      
      el.addEventListener('input', () => {
        calcDiff(day1Data[day1Key], el.value, diffId);
      });
    }
  });

  const saveBtn = document.getElementById('save-day15-medidas');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const dataToSave = {};
      inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) dataToSave[id] = el.value;
      });
      localStorage.setItem('megaGluteosDay15', JSON.stringify(dataToSave));

  const saveAnalysisBtn = document.getElementById('save-day15-analysis');
  const analysisInput = document.getElementById('d15-analysis-input');
  if (saveAnalysisBtn && analysisInput) {
    const savedAnalysis = localStorage.getItem('megaGluteosDay15Analysis');
    if (savedAnalysis) analysisInput.value = savedAnalysis;
    
    saveAnalysisBtn.addEventListener('click', () => {
      localStorage.setItem('megaGluteosDay15Analysis', analysisInput.value);
      alert('¡Tu análisis personal ha sido guardado con éxito!');
    });
  }
      alert('¡Medidas de Evaluación guardadas con éxito! ¡Felicidades por llegar a la mitad del reto!');
    });
  }

  // 3. Pruebas físicas (guardado automático)
  const tests = ['d15-squats', 'd15-thrusts'];
  const savedTests = JSON.parse(localStorage.getItem('megaGluteosDay15Tests')) || {};
  tests.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedTests[id]) el.value = savedTests[id];
      el.addEventListener('input', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay15Tests')) || {};
        currentData[id] = el.value;
        localStorage.setItem('megaGluteosDay15Tests', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 16
// ==========================================
function initDay16Forms() {
  const checkboxes = Array.from({length: 13}, (_, i) => `d16-ex${i+1}`);
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay16Check')) || {};
  
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay16Check')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay16Check', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 17 (CALCULADORA DE DÉFICIT)
// ==========================================
function initDay17Forms() {
  const checkboxes = ['d17-read', 'd17-yoga1', 'd17-yoga2'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay17CheckAll')) || {};
  
  // Compatibilidad hacia atrás (por si tenían marcado 'd17-read' de forma aislada)
  const oldRead = localStorage.getItem('megaGluteosDay17Check');
  if (oldRead === 'true' && savedChecks['d17-read'] === undefined) {
    savedChecks['d17-read'] = true;
  }

  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay17CheckAll')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay17CheckAll', JSON.stringify(currentData));
      });
    }
  });

  const calcBtn = document.getElementById('d17-calc-btn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const pesoInput = document.getElementById('d17-peso').value;
      if (!pesoInput || pesoInput <= 0) {
        alert('Por favor ingresa un peso válido.');
        return;
      }
      
      const peso = parseFloat(pesoInput);
      const mantenimiento = peso * 30;
      const deficit = mantenimiento - (mantenimiento * 0.15);
      
      document.getElementById('d17-maint').textContent = Math.round(mantenimiento);
      document.getElementById('d17-def').textContent = Math.round(deficit);
      document.getElementById('d17-results').style.display = 'block';
    });
  }
}

// ==========================================
// LÓGICA DÍA 18 (CHECKBOXES)
// ==========================================
function initDay18Forms() {
  const checkboxes = ['d18-ex1', 'd18-ex2', 'd18-ex3', 'd18-ex4', 'd18-ex5', 'd18-ex6', 'd18-ex7'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay18Checks')) || {};
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay18Checks')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay18Checks', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 19 (CHECKBOXES)
// ==========================================
function initDay19Forms() {
  const checkboxes = ['d19-ex1', 'd19-ex2', 'd19-ex3', 'd19-ex4', 'd19-ex5', 'd19-ex6', 'd19-fin1', 'd19-fin2', 'd19-fin3', 'd19-fin4'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay19Checks')) || {};
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay19Checks')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay19Checks', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DÍA 20 (CHECKBOXES Y MEDIDAS)
// ==========================================
function initDay20Forms() {
  const checkboxes = ['d20-ex1', 'd20-ex2', 'd20-ex3', 'd20-ex4', 'd20-ex5'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay20Checks')) || {};
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay20Checks')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay20Checks', JSON.stringify(currentData));
      });
    }
  });

  const saveBtn = document.getElementById('save-day20-medidas');
  if (saveBtn) {
    const gluteos = document.getElementById('gluteos-d20-input');
    const cintura = document.getElementById('cintura-d20-input');
    const squats = document.getElementById('squats-d20-input');
    const thrusts = document.getElementById('thrusts-d20-input');
    
    const savedData = JSON.parse(localStorage.getItem('megaGluteosDay20Medidas')) || {};
    if (savedData.gluteos && gluteos) gluteos.value = savedData.gluteos;
    if (savedData.cintura && cintura) cintura.value = savedData.cintura;
    if (savedData.squats && squats) squats.value = savedData.squats;
    if (savedData.thrusts && thrusts) thrusts.value = savedData.thrusts;

    saveBtn.addEventListener('click', () => {
      const dataToSave = {
        gluteos: gluteos ? gluteos.value : '',
        cintura: cintura ? cintura.value : '',
        squats: squats ? squats.value : '',
        thrusts: thrusts ? thrusts.value : ''
      };
      localStorage.setItem('megaGluteosDay20Medidas', JSON.stringify(dataToSave));
      
      saveBtn.textContent = '¡Evaluación Guardada!';
      saveBtn.style.background = '#2ecc71';
      setTimeout(() => {
        saveBtn.textContent = 'Guardar Evaluación';
        saveBtn.style.background = 'var(--primary)';
      }, 2000);
    });
  }
}

// ==========================================
// LÓGICA DÍA 21 (CHECKBOXES Y MEDIDAS)
// ==========================================
function initDay21Forms() {
  const checkboxes = ['d21-ex1', 'd21-ex2', 'd21-ex3', 'd21-ex4', 'd21-ex5', 'd21-ex6'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay21Checks')) || {};
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay21Checks')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay21Checks', JSON.stringify(currentData));
      });
    }
  });

  const saveBtn = document.getElementById('save-day21-medidas');
  if (saveBtn) {
    const gluteos = document.getElementById('gluteos-d21-input');
    const cintura = document.getElementById('cintura-d21-input');
    
    const savedData = JSON.parse(localStorage.getItem('megaGluteosDay21Medidas')) || {};
    if (savedData.gluteos && gluteos) gluteos.value = savedData.gluteos;
    if (savedData.cintura && cintura) cintura.value = savedData.cintura;

    saveBtn.addEventListener('click', () => {
      const dataToSave = {
        gluteos: gluteos ? gluteos.value : '',
        cintura: cintura ? cintura.value : ''
      };
      localStorage.setItem('megaGluteosDay21Medidas', JSON.stringify(dataToSave));
      
      saveBtn.textContent = '¡Resultados Guardados!';
      saveBtn.style.background = '#2ecc71';
      setTimeout(() => {
        saveBtn.textContent = 'Guardar Resultados Finales';
        saveBtn.style.background = 'var(--primary)';
      }, 2000);
    });
  }
}

// ==========================================
// LÓGICA DÍA 22 (COMPROMISO)
// ==========================================
function initDay22Forms() {
  const checkboxes = ['d22-commitment'];
  const savedChecks = JSON.parse(localStorage.getItem('megaGluteosDay22Checks')) || {};
  checkboxes.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (savedChecks[id]) el.checked = true;
      el.addEventListener('change', () => {
        const currentData = JSON.parse(localStorage.getItem('megaGluteosDay22Checks')) || {};
        currentData[id] = el.checked;
        localStorage.setItem('megaGluteosDay22Checks', JSON.stringify(currentData));
      });
    }
  });
}

// ==========================================
// LÓGICA DEL CRONÓMETRO (FLOATING TIMER)
// ==========================================
let timerInterval;
let timerSeconds = 0;
let isTimerRunning = false;

// Generar pitido en Base64 para que cargue instantáneamente y sin depender de internet
function getBeepDataURI() {
  const sampleRate = 44100;
  const duration = 0.5;
  const freq = 800;
  const samples = duration * sampleRate;
  const buffer = new ArrayBuffer(44 + samples);
  const view = new DataView(buffer);
  
  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) view.setUint8(offset + i, string.charCodeAt(i));
  };
  
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + samples, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate, true);
  view.setUint16(32, 1, true);
  view.setUint16(34, 8, true);
  writeString(view, 36, 'data');
  view.setUint32(40, samples, true);
  
  let offset = 44;
  for (let i = 0; i < samples; i++) {
    let t = i / sampleRate;
    let sample = Math.sin(freq * 2 * Math.PI * t);
    let amp = 0;
    if (t < 0.1) amp = 1;
    else if (t > 0.15 && t < 0.25) amp = 1;
    else if (t > 0.3 && t < 0.4) amp = 1;
    sample = Math.max(0, Math.min(255, Math.floor((sample * amp * 127) + 128)));
    view.setUint8(offset, sample);
    offset++;
  }
  
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return 'data:audio/wav;base64,' + btoa(binary);
}

let beepAudio = new Audio(getBeepDataURI());
beepAudio.preload = 'auto';

function playTimerBeep() {
  try {
    beepAudio.currentTime = 0;
    beepAudio.play().catch(e => console.log(e));
  } catch (e) {
    console.error("Audio play failed", e);
  }
}

const floatingTimer = document.getElementById('floating-timer');
const toggleTimerBtn = document.getElementById('toggle-timer-btn');
const timerDisplay = document.getElementById('timer-display');
const btnTimerPlay = document.getElementById('btn-timer-play');
const btnTimerReset = document.getElementById('btn-timer-reset');

toggleTimerBtn.addEventListener('click', () => {
  floatingTimer.classList.toggle('visible');
});

function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const s = (timerSeconds % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${m}:${s}`;
}

document.getElementById('btn-timer-30').addEventListener('click', () => { timerSeconds += 30; updateTimerDisplay(); });
document.getElementById('btn-timer-60').addEventListener('click', () => { timerSeconds += 60; updateTimerDisplay(); });

btnTimerPlay.addEventListener('click', () => {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    btnTimerPlay.innerHTML = '<i class="fas fa-play"></i>';
    btnTimerPlay.classList.remove('pause');
  } else {
    if (timerSeconds <= 0) return;
    isTimerRunning = true;
    btnTimerPlay.innerHTML = '<i class="fas fa-pause"></i>';
    btnTimerPlay.classList.add('pause');
    
    // Desbloquear audio en móviles con una pequeña trampa (reproducir y pausar inmediatamente)
    if (!beepAudio.unlocked) {
      beepAudio.play().then(() => {
        beepAudio.pause();
        beepAudio.currentTime = 0;
        beepAudio.unlocked = true;
      }).catch(e => console.log("Audio unlock error", e));
    }
    
    timerInterval = setInterval(() => {
      timerSeconds--;
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        timerSeconds = 0;
        btnTimerPlay.innerHTML = '<i class="fas fa-play"></i>';
        btnTimerPlay.classList.remove('pause');
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        playTimerBeep(); // Hacer sonar los pitidos
      }
      updateTimerDisplay();
    }, 1000);
  }
});

btnTimerReset.addEventListener('click', () => {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerSeconds = 0;
  btnTimerPlay.innerHTML = '<i class="fas fa-play"></i>';
  btnTimerPlay.classList.remove('pause');
  updateTimerDisplay();
});

// ==========================================
// LÓGICA DE MODAL PARA IMÁGENES
// ==========================================
const imageModal = document.getElementById('image-modal');
const expandedImg = document.getElementById('expanded-img');
const closeBtn = document.querySelector('.close-image-modal');

if (imageModal && expandedImg && closeBtn) {
  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('mini-ref-img')) {
      e.preventDefault(); // Evita que el clic en la imagen active el checkbox
      imageModal.style.display = 'flex';
      expandedImg.src = e.target.src;
    }
    
    if (e.target === imageModal || e.target === closeBtn) {
      imageModal.style.display = 'none';
      expandedImg.src = '';
    }
  });
}

// ==========================================
// LÓGICA BONOS VIP
// ==========================================
const vipLocked = document.getElementById('vip-locked');
const vipUnlocked = document.getElementById('vip-unlocked');
const vipCodeInput = document.getElementById('vip-code-input');
const unlockVipBtn = document.getElementById('unlock-vip-btn');
const vipError = document.getElementById('vip-error');
const buyVipBtn = document.getElementById('buy-vip-btn');

function checkVipStatus() {
  if (localStorage.getItem('megaGluteosVIP') === 'true') {
    if (vipLocked) vipLocked.style.display = 'none';
    if (vipUnlocked) vipUnlocked.style.display = 'block';
  }
}

if (unlockVipBtn) {
  unlockVipBtn.addEventListener('click', () => {
    const code = vipCodeInput.value.trim().toUpperCase();
    // VIP3 es el código de prueba
    if (code === 'VIP3') {
      localStorage.setItem('megaGluteosVIP', 'true');
      checkVipStatus();
    } else {
      vipError.style.display = 'block';
      setTimeout(() => vipError.style.display = 'none', 3000);
    }
  });
}

if (buyVipBtn) {
  buyVipBtn.addEventListener('click', () => {
    // Aquí pondría el link de Hotmart en el futuro
    alert("Simulación: Serás redirigido a Hotmart para comprar los bonos. Una vez comprado, recibirás el código: VIP3");
  });
}

// Revisar al iniciar la app
checkVipStatus();

// ==========================================
// LÓGICA DE QUIZ INTERACTIVO
// ==========================================
window.checkQuizAnswer = function(element, isCorrect) {
  element.style.transition = "all 0.3s ease";
  
  if (isCorrect) {
    element.style.backgroundColor = '#dcfce7'; 
    element.style.borderColor = '#86efac';
    element.style.color = '#166534';
    
    const quizCard = element.closest('.quiz-card');
    if (quizCard) {
      const explanation = quizCard.querySelector('.quiz-explanation');
      if (explanation) {
        explanation.style.display = 'block';
        explanation.style.opacity = '0';
        setTimeout(() => explanation.style.opacity = '1', 50);
      }
    }
  } else {
    element.style.backgroundColor = '#fee2e2'; 
    element.style.borderColor = '#fca5a5';
    element.style.color = '#991b1b';
    
    if (navigator.vibrate) navigator.vibrate(50);
  }
};

// ==========================================
// CALCULADORA DE PROTEÍNAS (DÍA 5)
// ==========================================
window.calculateProtein = function() {
  const input = document.getElementById('user-weight');
  const resultDiv = document.getElementById('protein-result');
  if (!input || !resultDiv) return;
  
  const weight = parseFloat(input.value);
  if (isNaN(weight) || weight <= 0) {
    resultDiv.style.display = 'block';
    resultDiv.style.backgroundColor = '#fee2e2';
    resultDiv.style.borderColor = '#fca5a5';
    resultDiv.style.color = '#991b1b';
    resultDiv.innerHTML = '<strong>¡Ups!</strong> Por favor ingresa un peso válido en kilos (ej. 60).';
    if (navigator.vibrate) navigator.vibrate(50);
    return;
  }
  
  const minProtein = Math.round(weight * 1.6);
  const maxProtein = Math.round(weight * 2.2);
  
  resultDiv.style.display = 'block';
  resultDiv.style.backgroundColor = '#f0fdf4';
  resultDiv.style.borderColor = '#bbf7d0';
  resultDiv.style.color = '#166534';
  resultDiv.innerHTML = `✨ Para tu peso de <strong>${weight} kg</strong>, tu objetivo diario ideal para hacer crecer tus glúteos es consumir entre <strong>${minProtein} y ${maxProtein} gramos de proteína</strong> al día.`;
  
  // Pequeña animación
  resultDiv.style.opacity = '0';
  setTimeout(() => resultDiv.style.opacity = '1', 50);
};



// --- CALCULADORA DE CALORÍAS Y MACROS ---
document.addEventListener('DOMContentLoaded', () => {
  const btnCalcular = document.getElementById('btn-calcular');
  if(btnCalcular) {
    btnCalcular.addEventListener('click', () => {
      const peso = parseFloat(document.getElementById('calc-peso').value);
      const altura = parseFloat(document.getElementById('calc-altura').value);
      const edad = parseFloat(document.getElementById('calc-edad').value);
      const actividad = parseFloat(document.getElementById('calc-actividad').value);

      if(!peso || !altura || !edad) {
        alert('Por favor completa peso, altura y edad para calcular tus macros.');
        return;
      }

      // Fórmula de Mifflin-St Jeor para mujeres
      // TMB = (10 × peso) + (6.25 × altura) - (5 × edad) - 161
      const tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
      
      // Calorías de Mantenimiento
      const mantenimiento = tmb * actividad;

      // Superávit calórico para glúteos (+300 kcal)
      const caloriasObjetivo = Math.round(mantenimiento + 300);

      // Distribución 40 / 40 / 20
      const calProteina = caloriasObjetivo * 0.40;
      const calCarbos = caloriasObjetivo * 0.40;
      const calGrasas = caloriasObjetivo * 0.20;

      // Gramos
      // Proteína y Carbos aportan 4 kcal por gramo. Grasa aporta 9 kcal por gramo.
      const gProteina = Math.round(calProteina / 4);
      const gCarbos = Math.round(calCarbos / 4);
      const gGrasas = Math.round(calGrasas / 9);

      // Renderizar en UI
      document.getElementById('res-calorias').textContent = caloriasObjetivo;
      document.getElementById('res-proteina').textContent = gProteina;
      document.getElementById('res-carbos').textContent = gCarbos;
      document.getElementById('res-grasas').textContent = gGrasas;

      // Mostrar contenedor y animar
      const resultadosDiv = document.getElementById('calc-resultados');
      resultadosDiv.style.display = 'block';
      resultadosDiv.style.animation = 'fadeInUp 0.5s ease forwards';
    });
  }
});





