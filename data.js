const routinesData = [
  {
    day: 1,
    title: "Evaluación Inicial",
    content: `
      <!-- Bienvenida de Camila -->
      <div class="welcome-card" style="background: linear-gradient(135deg, var(--primary) 0%, #FF8E53 100%); border-radius: 15px; padding: 1.5rem; color: white; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 8px 15px rgba(255, 107, 107, 0.3);">
        <img src="./camila-avatar.png" alt="Anais Vidal" style="display: block; margin: 0 auto 1rem; width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
        <div>
          <h2 style="margin: 0 0 0.5rem 0; font-size: 1.4rem; color: white;">¡Bienvenida, hermosa! 👋</h2>
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.5; color: rgba(255,255,255,0.95);">Soy Anais Vidal y estoy súper emocionada de acompañarte en este viaje de 21 días. Hoy damos el primer gran paso hacia tu mejor versión. Recuerda: este es tu proceso, no te compares con nadie. ¡Confía en el método, sé disciplinada y vamos a esculpir esos glúteos juntas!</p>
        </div>
      </div>
      
      <p style="font-size: 1.05rem; color: var(--text-main); margin-bottom: 1.5rem;">Antes de ir a sudar, es <strong>crucial</strong> hacer tu evaluación inicial. Esto nos permitirá conocer tu punto de partida y celebrar tus logros al final. Completa los datos de abajo con honestidad.<br><br><span style="color: #666; font-size: 0.9rem;"><em>🔒 Tranquila: Todos estos datos e imágenes se guardan <strong>exclusivamente de forma privada en tu celular</strong>, nadie más tendrá acceso a ellos.</em></span></p>
      
      <h3>1. Evaluación física</h3>
      <div class="interactive-form">
        <div class="form-group">
          <label>Circunferencia de glúteos (cm)</label>
          <input type="number" id="gluteos-input" placeholder="Ej: 95">
        </div>
        <div class="form-group">
          <label>Circunferencia de cintura (cm)</label>
          <input type="number" id="cintura-input" placeholder="Ej: 65">
        </div>
        <div class="form-group">
          <label>Peso corporal (opcional) (kg)</label>
          <input type="number" id="peso-input" placeholder="Ej: 60">
        </div>
        
        <div class="form-group">
          <label>Fotografías de progreso</label>
          <p class="small-text">Sube tus fotos de frente, perfil y espalda. Son privadas.</p>
          <div class="photo-grid">
            <div class="photo-upload">
              <input type="file" accept="image/*" id="photo-frente" hidden>
              <label for="photo-frente" id="lbl-photo-frente"><i class="fas fa-camera"></i><br>Frente</label>
            </div>
            <div class="photo-upload">
              <input type="file" accept="image/*" id="photo-perfil" hidden>
              <label for="photo-perfil" id="lbl-photo-perfil"><i class="fas fa-camera"></i><br>Perfil</label>
            </div>
            <div class="photo-upload">
              <input type="file" accept="image/*" id="photo-espalda" hidden>
              <label for="photo-espalda" id="lbl-photo-espalda"><i class="fas fa-camera"></i><br>Espalda</label>
            </div>
          </div>
        </div>
      </div>

      <h3>2. Prueba de condición física</h3>
      <div class="interactive-form">
        <div class="form-group">
          <label>Sentadillas en 1 min (cantidad)</label>
          <img src="./ref-squat.png" alt="Referencia Sentadilla" class="mini-ref-img" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
          <p class="small-text">Pies al ancho de hombros, baja la cadera hacia atrás como si fueras a sentarte en una silla. Mantén la espalda recta y que tus rodillas no pasen la punta de tus pies.</p>
          <input type="number" id="test-sentadillas" placeholder="Ej: 30">
        </div>
        <div class="form-group">
          <label>Plancha abdominal (segundos)</label>
          <img src="./ref-plank.png" alt="Referencia Plancha" class="mini-ref-img" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
          <p class="small-text">Apóyate en tus antebrazos y puntas de los pies. Mantén tu cuerpo recto como una tabla, apretando fuerte el abdomen y los glúteos. No dejes caer la cadera.</p>
          <input type="number" id="test-plancha" placeholder="Ej: 45">
        </div>
        <div class="form-group">
          <label>Elevaciones de cadera (máximas repeticiones)</label>
          <img src="./ref-thrust.png" alt="Referencia Elevación" class="mini-ref-img" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">
          <p class="small-text">Acuéstate boca arriba, flexiona las rodillas apoyando talones en el suelo. Eleva la cadera apretando los glúteos al máximo arriba y baja lento.</p>
          <input type="number" id="test-elevaciones" placeholder="Ej: 20">
        </div>
      </div>

      <h3>3. Tus Objetivos (Método SMART)</h3>
      <p>Visualiza y define tus objetivos rellenando cada paso:</p>
      <div class="interactive-form">
        <div class="form-group">
          <label><strong>S (Específico):</strong> ¿Qué quieres lograr exactamente?</label>
          <input type="text" id="smart-s" placeholder="Ej: Quiero tonificar y elevar mis glúteos">
        </div>
        <div class="form-group">
          <label><strong>M (Medible):</strong> ¿Cómo medirás el progreso?</label>
          <input type="text" id="smart-m" placeholder="Ej: Aumentar 2 cm de circunferencia">
        </div>
        <div class="form-group">
          <label><strong>A (Alcanzable):</strong> ¿A qué te comprometes?</label>
          <input type="text" id="smart-a" placeholder="Ej: Entrenar los 21 días del reto">
        </div>
        <div class="form-group">
          <label><strong>R (Relevante):</strong> ¿Por qué es importante para ti?</label>
          <input type="text" id="smart-r" placeholder="Ej: Para sentirme mejor conmigo misma">
        </div>
        <div class="form-group">
          <label><strong>T (Temporal):</strong> ¿En cuánto tiempo?</label>
          <input type="text" id="smart-t" placeholder="Ej: En estas 3 semanas">
        </div>
        
        <button id="save-day1-btn" class="primary-btn pulse" style="margin-top: 1rem; width: 100%; border-radius: 8px;">Guardar mi Evaluación</button>
      </div>

      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 1rem; border-radius: 4px; margin-top: 1.5rem;">
        <strong><i class="fas fa-exclamation-triangle"></i> ¡Atención para mañana!</strong><br>
        Mañana usaremos una <strong>Banda de Resistencia</strong> (opcional pero muy recomendada) para maximizar el trabajo en el puente de glúteos.
      </div>
    `
  },
  {
    day: 2,
    title: "Activación Muscular",
    content: `
      <p>Uno de los errores más comunes en el entrenamiento de glúteos es la falta de activación muscular previa. Muchas personas realizan ejercicios como sentadillas o zancadas sin sentir que trabajan los glúteos. Esto ocurre porque otros músculos compensan el esfuerzo, especialmente los cuádriceps y la zona lumbar.</p>
      
      <img src="./ref-bad-form.png" alt="Mala Postura" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin: 1rem 0; border: 2px solid #E53E3E;">
      
      <h3>Conexión mente-músculo:</h3>
      <p>Para potenciar la activación, enfócate en el glúteo que estás trabajando. Visualiza cómo se contrae y relaja con cada repetición. Realiza los ejercicios lentamente y mantén la contracción durante 1 o 2 segundos en la parte superior.</p>

      <h3>Tu Rutina (3 series x 15 reps)</h3>
      <p class="small-text" style="margin-bottom: 1.5rem;">Marca cada ejercicio a medida que lo completes. Dedica al menos 20 minutos a esta activación.</p>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d2-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Puentes de glúteos</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Puente de glúteos">
            <p>Acuéstate boca arriba, con las rodillas flexionadas. Eleva la cadera apretando los glúteos en la parte superior.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d2-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Patadas de cuadrupedia</strong>
            <img src="./ref-kickback.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Patada glúteo">
            <p>Colócate a cuatro patas y eleva una pierna hacia arriba manteniendo la rodilla flexionada. Aprieta arriba.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d2-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Fire hydrants</strong>
            <img src="./ref-hydrant.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Fire hydrant">
            <p>En la misma posición, eleva la pierna lateralmente. Este ejercicio activa especialmente el glúteo medio.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d2-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Puente con banda (Opcional)</strong>
            <img src="./ref-thrust-pulse.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Puente con banda">
            <p>Si tienes banda de resistencia, colócala por encima de tus rodillas para añadir muchísima intensidad.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d2-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Clamshells (Ostras)</strong>
            <img src="./ref-clamshell.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Clamshells">
            <p>Acuéstate de lado con piernas flexionadas. Abre y cierra las rodillas sintiendo la zona lateral.</p>
          </div>
        </label>
      </div>

      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 1rem; border-radius: 4px; margin-top: 1.5rem;">
        <strong><i class="fas fa-exclamation-triangle"></i> ¡Atención para mañana!</strong><br>
        Mañana trabajaremos con <strong>Bandas de Resistencia</strong>. ¡Asegúrate de tener la tuya a mano!
      </div>
    `
  },
  {
    day: 3,
    title: "Entrenamiento Funcional",
    content: `
      <p>Hoy es el día en que comienzas a poner en práctica la activación muscular de los días anteriores. Trabajaremos la musculatura de los glúteos de forma efectiva utilizando únicamente el peso de tu cuerpo.</p>
      
      <div class="quiz-card" style="background: #fff; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #ffebee;">
        <h3 style="color: var(--primary); margin-top: 0; margin-bottom: 1rem;"><i class="fas fa-brain"></i> Mini Quiz del Día</h3>
        <p style="font-weight: 600; margin-bottom: 1rem; font-size: 0.95rem;">¿Cuál de estos músculos es el principal motor (el que debería hacer más fuerza) cuando realizas un puente de glúteos o una sentadilla profunda?</p>
        
        <ul style="list-style: none; padding: 0; margin: 0 0 1rem 0; gap: 0.5rem; display: flex; flex-direction: column;">
          <li onclick="checkQuizAnswer(this, false)" style="padding: 0.8rem; background: #f8f9fa; border-radius: 8px; border: 1px solid #eee; font-size: 0.95rem; cursor: pointer;">A) Los cuádriceps (parte frontal del muslo)</li>
          <li onclick="checkQuizAnswer(this, true)" style="padding: 0.8rem; background: #f8f9fa; border-radius: 8px; border: 1px solid #eee; font-size: 0.95rem; cursor: pointer;">B) El glúteo mayor</li>
          <li onclick="checkQuizAnswer(this, false)" style="padding: 0.8rem; background: #f8f9fa; border-radius: 8px; border: 1px solid #eee; font-size: 0.95rem; cursor: pointer;">C) La zona lumbar (espalda baja)</li>
        </ul>
        
        <div class="quiz-explanation" style="display: none; transition: opacity 0.4s ease; margin-top: 1rem; font-size: 0.95rem; line-height: 1.5; color: #166534; border-top: 1px solid #bbf7d0; padding-top: 1rem; background: #f0fdf4; padding: 1rem; border-radius: 8px;">
          <strong>¡Correcto! Es el glúteo mayor. 🎉</strong><br><br>
          Aunque los cuádriceps asisten en muchos movimientos, el <strong>glúteo mayor</strong> es el músculo más grande y poderoso de tu cuerpo, y es el principal responsable de extender la cadera.<br><br>
          Si durante los ejercicios sientes que la espalda baja o los muslos arden mucho más que tus glúteos, significa que esos otros músculos están "robando" el esfuerzo. ¡Por eso la activación consciente es clave!
        </div>
      </div>
      
      <div class="content-card" style="margin-bottom: 1.5rem;">
        <h3 style="color: var(--secondary);"><i class="fas fa-fire"></i> Calentamiento (5-10 min)</h3>
        <ul style="font-size: 0.95rem; padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-main);">
          <li><strong>Marcha en el lugar:</strong> 2 minutos.</li>
          <li><strong>Círculos de cadera:</strong> 1 minuto por lado.</li>
          <li><strong>Sentadillas sin peso:</strong> 15 repeticiones.</li>
          <li><strong>Elevaciones de talones:</strong> 20 repeticiones.</li>
          <li><strong>Pasos laterales con apertura:</strong> 1 minuto.</li>
        </ul>
      </div>

      <h3>Rutina (4 Rondas)</h3>
      <p class="small-text" style="margin-bottom: 1.5rem;">Descansa 60 segundos entre cada ronda. Marca cada ejercicio a medida que lo completes. (Principiantes: 3 rondas).</p>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d3-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Sentadillas profundas (20 reps)</strong>
            <img src="./ref-squat.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadilla">
            <p>Flexiona las rodillas hacia atrás. Mantén el peso en los talones y aprieta al subir conscientemente.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d3-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Zancadas alternas (16 reps total)</strong>
            <img src="./ref-lunge.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Zancadas">
            <p>Da un paso al frente y flexiona hasta que la pierna trasera casi toque el suelo. Empuja con el talón.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d3-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Puente a una pierna (12 reps/lado)</strong>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <img src="./ref-single-leg-bridge.png" class="mini-ref-img" style="margin-top: 0; width: calc(50% - 0.25rem); height: auto; object-fit: cover;" alt="Puente a una pierna">
              <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top: 0; width: calc(50% - 0.25rem); height: auto; object-fit: cover;" alt="Opción con ambas piernas">
            </div>
            <p>Levanta una pierna estirada al techo y empuja la cadera hacia arriba con la pierna de apoyo. (Si es muy difícil, usa ambas como en la foto de la derecha).</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d3-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Sentadilla sumo (15 reps)</strong>
            <img src="./ref-sumo.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadilla Sumo">
            <p>Piernas abiertas y puntas hacia afuera. Baja profundo y haz 3 pequeños rebotes antes de subir.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d3-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Step-ups en silla (10 reps/lado)</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Sube un pie a una silla resistente y empuja desde el talón. Baja controlando el movimiento.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d3-ex6">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>6. Elevaciones laterales (15 reps/lado)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Elevaciones laterales">
            <p>Acuéstate de lado con piernas estiradas. Eleva la pierna superior sintiendo la contracción en el glúteo medio.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d3-ex7">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>7. Patadas traseras (15 reps/lado)</strong>
            <img src="./ref-kickback.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Patada trasera">
            <p>En cuadrupedia, eleva una pierna hacia atrás manteniendo la rodilla en 90 grados. No arquees la espalda.</p>
          </div>
        </label>
      </div>
      
      <div class="content-card" style="margin-top: 1rem;">
        <h3 style="color: #00E5FF;"><i class="fas fa-snowflake"></i> Enfriamiento (5-10 min)</h3>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-top:0.5rem;">Mantén cada posición por 30s: Estiramiento de glúteos acostado, postura de la paloma, estiramiento de isquiotibiales y cuádriceps. ¡Respira y relájate!</p>
      </div>
    `
  },
  {
    day: 4,
    title: "Estiramientos y Movilidad",
    content: `
      <!-- EXPLICACIÓN DESCANSO -->
      <div class="content-card" style="background: linear-gradient(135deg, #FF8E53 0%, var(--primary) 100%); color: white; border-radius: 12px; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);">
        <h3 style="color: white; margin-top: 0;"><i class="fas fa-bed"></i> ¿Por qué no entrenamos glúteos hoy?</h3>
        <p style="font-size: 0.95rem; margin-bottom: 0;">Tus glúteos son músculos muy grandes que necesitan entre 48 y 72 horas para recuperarse. <strong>¡El músculo crece cuando descansas, no cuando entrenas!</strong> Entrenarlos todos los días frena tu progreso y puede causar lesiones. Por eso hoy los dejaremos descansar.</p>
      </div>

      <p style="font-size: 1.05rem; color: var(--text-main);">Sin embargo, si eres de las que necesita sudar todos los días para mantener el hábito, aquí tienes una <strong>Rutina Opcional de Tren Superior y Abdomen</strong>. Así te mantienes activa sin sabotear el crecimiento de tus glúteos.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Rutina Opcional: Tren Superior y Core</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">3 Rondas | 12-15 reps por ejercicio | 30s descanso</p>
      </div>

      <div class="interactive-form" style="margin-bottom: 2rem;">
        <label class="checkbox-container">
          <input type="checkbox" id="d4-opt1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Flexiones de brazos (Push-ups)</strong>
            <img src="./ref-pushups.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Flexiones">
            <p>Apoya las rodillas si eres principiante. Mantén el abdomen firme.</p>
          </div>
        </label>
        <label class="checkbox-container">
          <input type="checkbox" id="d4-opt2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Plancha isométrica (Plank)</strong>
            <img src="./ref-plank.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Plancha">
            <p>Mantén la posición 30 a 45 segundos. Codos bajo los hombros.</p>
          </div>
        </label>
        <label class="checkbox-container">
          <input type="checkbox" id="d4-opt3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Superman (Espalda baja)</strong>
            <img src="./ref-superman.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Superman">
            <p>Acuéstate boca abajo y eleva brazos y piernas a la vez. Aprieta la espalda.</p>
          </div>
        </label>
        <label class="checkbox-container">
          <input type="checkbox" id="d4-opt4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Crunch abdominal</strong>
            <img src="./ref-crunch.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Crunch abdominal">
            <p>Eleva solo los hombros del suelo apretando fuerte el abdomen.</p>
          </div>
        </label>
      </div>

      <h3 style="margin-top:1.5rem; color:var(--primary);">Estiramientos y Movilidad</h3>
      <p>El entrenamiento no está completo sin una rutina de estiramientos y movilidad. Estos ejercicios son fundamentales para prevenir lesiones, mejorar la flexibilidad y permitir una mejor recuperación muscular. Los glúteos, al ser músculos grandes y potentes, pueden acumular mucha tensión si no se estiran correctamente. Además, mejorar la movilidad de las caderas y la pelvis te permitirá ejecutar mejor los ejercicios y aumentar la amplitud de movimiento, lo que se traduce en mejores resultados.</p>
      
      <h3 style="margin-top:1.5rem; color:var(--primary);">Importancia de la movilidad:</h3>
      <p>La movilidad es la capacidad de mover las articulaciones a través de un rango completo de movimiento sin dolor ni restricción. Trabajar la movilidad de caderas, rodillas y tobillos es esencial para que tus glúteos puedan activarse de forma óptima en cada ejercicio.</p>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fff5f8;">
        <h3 style="color: var(--secondary);"><i class="fas fa-info-circle"></i> Consejos durante los estiramientos:</h3>
        <ul style="font-size: 0.95rem; padding-left: 1.2rem; margin-top: 0.5rem; color: var(--text-main);">
          <li>No rebotes durante el estiramiento; mantén la posición de forma estática.</li>
          <li>Respira profundamente para ayudar a relajar los músculos.</li>
          <li>No estires hasta sentir dolor; busca un punto de tensión cómoda.</li>
        </ul>
        <p style="font-size: 0.9rem; margin-top:0.5rem; margin-bottom:0;">Incorporar estos estiramientos a tu rutina diaria reducirá la rigidez muscular, mejorará tu postura y potenciará tus resultados a largo plazo.</p>
      </div>

      <h3>Rutina de estiramientos</h3>
      <p class="small-text" style="margin-bottom: 1.5rem;">Mantén cada posición 30 segundos por lado. Marca cada estiramiento al completarlo.</p>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d4-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Estiramiento de glúteos acostado</strong>
            <img src="./ref-str-glute.png?v=55" class="mini-ref-img" style="margin-top:0.5rem;" alt="Estiramiento Glúteo">
            <p>Acuéstate boca arriba, cruza una pierna sobre la otra y lleva la rodilla hacia el pecho.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d4-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Postura de la paloma</strong>
            <img src="./ref-str-pigeon.png?v=55" class="mini-ref-img" style="margin-top:0.5rem;" alt="Postura Paloma">
            <p>Lleva una pierna doblada adelante y estira la otra hacia atrás. Siente el estiramiento en la cadera.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d4-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Estiramiento de isquiotibiales</strong>
            <img src="./ref-str-hamstring.png?v=55" class="mini-ref-img" style="margin-top:0.5rem;" alt="Isquiotibiales">
            <p>Apoya una pierna sobre una superficie elevada y lleva el pecho hacia la pierna con la espalda recta.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d4-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Estiramiento de cuádriceps</strong>
            <img src="./ref-str-quad.png?v=55" class="mini-ref-img" style="margin-top:0.5rem;" alt="Cuádriceps">
            <p>De pie, sujeta el tobillo de una pierna y lleva el talón hacia el glúteo.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d4-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Círculos de cadera</strong>
            <img src="./ref-str-hips.png?v=55" class="mini-ref-img" style="margin-top:0.5rem;" alt="Círculos Cadera">
            <p>De pie, realiza movimientos circulares amplios con la pelvis para mejorar la movilidad.</p>
          </div>
        </label>
      </div>
    `
  },
  {
    day: 5,
    title: "Nutrición y Crecimiento",
    content: `
      <p>La alimentación es uno de los pilares fundamentales para lograr glúteos tonificados y levantados. Puedes entrenar con la mejor rutina, tener la mejor técnica y ser constante con tus ejercicios, pero si tu alimentación no respalda ese esfuerzo, tus resultados serán limitados o nulos. La nutrición y el entrenamiento van de la mano: mientras que el ejercicio estimula las fibras musculares para que crezcan, la comida proporciona los nutrientes necesarios para la recuperación y el desarrollo muscular. Por eso, comprender qué comer, cuándo y en qué cantidad es esencial para maximizar tus resultados.</p>
      <p>Cuando tu objetivo es tonificar y aumentar la masa muscular en los glúteos, tu dieta debe centrarse en tres macronutrientes principales: proteínas, carbohidratos y grasas saludables. Cada uno cumple un rol importante en el proceso de construcción muscular y recuperación. Además, micronutrientes como vitaminas y minerales también juegan un papel fundamental en la optimización del rendimiento y la salud general.</p>


      <h3 style="margin-top:1.5rem; color:var(--primary);">Importancia de las proteínas</h3>
      <p>Las proteínas son las encargadas de reparar las fibras musculares que se rompen durante el entrenamiento. Consumir suficiente proteína no solo facilita la recuperación muscular, sino que también estimula el crecimiento y la tonificación. Se recomienda un consumo diario de 1.6 a 2.2 gramos de proteína por kilogramo de peso corporal si tu objetivo es aumentar masa muscular.</p>
      <p>Esto significa que si pesas 60 kg, deberías consumir entre 96 y 132 gramos de proteína al día.</p>
      <img src="./ref-nutri-protein.png?v=56" alt="Plato con Proteínas" style="width: 100%; border-radius: 12px; margin: 1rem 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <p>Algunas fuentes de proteínas de alta calidad incluyen:</p>
      <ul style="margin-bottom: 1rem;">
        <li>Pechuga de pollo, Pescados como salmón, atún o merluza.</li>
        <li>Huevos (especialmente la clara), Carne magra (res o cerdo magro).</li>
        <li>Lácteos bajos en grasa (yogur griego, queso cottage).</li>
        <li>Proteínas vegetales como tofu, tempeh, legumbres y quinoa.</li>
        <li>Suplementos de proteína en polvo (si no puedes alcanzar tus requerimientos solo con alimentos).</li>
      </ul>
      <p>El mejor momento para consumir proteínas es justo después de entrenar, ya que el cuerpo está más receptivo para absorber los nutrientes necesarios para la reparación muscular. Sin embargo, es importante distribuir tu ingesta de proteínas a lo largo del día para mantener un flujo constante de aminoácidos en el cuerpo.</p>

      <div class="calculator-card" style="background: #fff; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border: 1px solid #ffebee;">
        <h3 style="color: var(--primary); margin-top: 0; margin-bottom: 1rem;"><i class="fas fa-calculator"></i> Tu Calculadora de Proteína</h3>
        <p style="font-size: 0.95rem; margin-bottom: 1rem; color: var(--text-main);">Ingresa tu peso actual para descubrir exactamente cuánta proteína diaria necesitas para maximizar el crecimiento de tus glúteos.</p>
        
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
          <input type="number" id="user-weight" placeholder="Tu peso en kg (ej. 60)" style="flex: 1; padding: 0.8rem; border: 1px solid #ccc; border-radius: 8px; font-size: 1rem; outline: none; font-family: 'Poppins', sans-serif;">
          <button onclick="calculateProtein()" style="background: var(--primary); color: white; border: none; border-radius: 8px; padding: 0 1.2rem; font-weight: bold; cursor: pointer; transition: background 0.3s;">Calcular</button>
        </div>
        
        <div id="protein-result" style="display: none; transition: opacity 0.4s ease; padding: 1rem; border-radius: 8px; font-size: 0.95rem; line-height: 1.5;">
          <!-- El resultado aparecerá aquí -->
        </div>
      </div>

      <h3 style="margin-top:1.5rem; color:var(--primary);">Importancia de los carbohidratos</h3>
      <p>Los carbohidratos son la principal fuente de energía para el cuerpo. Durante el entrenamiento, tu cuerpo utiliza el glucógeno (carbohidrato almacenado en los músculos) como combustible. Consumir carbohidratos después de entrenar ayuda a reponer estas reservas y mejora la recuperación muscular. Además, los carbohidratos desempeñan un papel clave en la absorción de proteínas y favorecen el crecimiento muscular.</p>
      <p>No todos los carbohidratos son iguales. Los carbohidratos complejos, que se digieren lentamente, son ideales para proporcionar energía sostenida y evitar picos de azúcar en la sangre. Algunos ejemplos son: Avena, Arroz integral, Quinoa, Patatas y batatas, Panes y pastas integrales, Frutas y verduras.</p>
      <p>Después de entrenar, puedes optar por carbohidratos de absorción más rápida (como frutas o arroz blanco) para reponer rápidamente tus reservas de glucógeno. Durante el resto del día, prioriza los carbohidratos complejos para mantener estables tus niveles de energía.</p>

      <h3 style="margin-top:1.5rem; color:var(--primary);">Importancia de las grasas saludables</h3>
      <p>Aunque muchas personas temen consumir grasas cuando buscan tonificar, estas son esenciales para el equilibrio hormonal y la absorción de vitaminas liposolubles (A, D, E y K). Las grasas saludables también ayudan a mantenerte saciada y a evitar antojos innecesarios. Lo importante es elegir las fuentes correctas de grasa y consumirlas con moderación.</p>
      <p>Fuentes recomendadas: Aguacate, Aceite de oliva extra virgen, Frutos secos, Semillas, Pescados grasos, Mantequillas de frutos secos.</p>
      <p>Se recomienda que entre un 20 y 30 % de tu ingesta calórica diaria provenga de grasas saludables. Evita las grasas trans y los alimentos procesados.</p>

      <h3 style="margin-top:1.5rem; color:var(--primary);">Distribución y ejemplo de plan</h3>
      <p>No existe una regla única sobre cuántas comidas debes hacer al día, pero lo ideal es encontrar un esquema que se adapte a tu rutina y te permita cumplir con tus requerimientos calóricos. Lo importante es que en cada comida incluyas una fuente de proteína, un carbohidrato complejo, grasas saludables y verduras.</p>
      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <img src="./ref-nutri-carbs.png?v=56" alt="Desayuno Saludable" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;">
        <strong>Ejemplo de un día de comidas:</strong><br><br>
        <strong>Desayuno:</strong> Avena cocida con leche vegetal, mantequilla de almendra, plátano y chía.<br>
        <strong>Media mañana:</strong> Yogur griego natural con frutos rojos y un puñado de nueces.<br>
        <strong>Almuerzo:</strong> Pechuga de pollo a la plancha, arroz integral, brócoli al vapor y aceite de oliva.<br>
        <strong>Merienda:</strong> Batido de proteína con una manzana y crema de cacahuate.<br>
        <strong>Cena:</strong> Salmón al horno, quinoa, espinacas salteadas y aguacate en rodajas.
      </div>

      <h3 style="margin-top:1.5rem; color:var(--primary);">Hidratación y Suplementos</h3>
      <p>No podemos hablar de alimentación sin mencionar la importancia de la hidratación. Beber suficiente agua es vital (al menos 2 litros). Ayuda a transportar nutrientes a las células, elimina toxinas y previene calambres y fatiga. Evita las bebidas azucaradas, refrescos y jugos procesados.</p>
      <p><strong>Suplementos (no imprescindibles):</strong> Proteína en polvo, Creatina, BCAA, Multivitamínicos. Consulta con un profesional de la salud antes de iniciar.</p>

      <!-- RUTINA OPCIONAL -->
      <hr style="border: 0; border-top: 1px solid #eee; margin: 2rem 0;">
      <div class="content-card" style="background: linear-gradient(135deg, #FF8E53 0%, var(--primary) 100%); color: white; border-radius: 12px; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);">
        <h3 style="color: white; margin-top: 0;"><i class="fas fa-heartbeat"></i> Rutina Opcional Quema-Grasa</h3>
        <p style="font-size: 0.95rem; margin-bottom: 0;">Ayer trabajamos tren superior y hoy tus glúteos siguen en recuperación. Si sientes la necesidad de moverte y sudar, te dejo esta rutina de Cardio LISS (Baja Intensidad) que te ayudará a oxidar grasa sin fatigar tus músculos de hipertrofia.</p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d5-opt1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Jumping Jacks (45 seg)</strong>
            <img src="./ref-jumping-jacks.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Jumping Jacks">
            <p>Mantén un ritmo constante. Si no quieres saltar, haz pasos laterales rápidos.</p>
          </div>
        </label>
        <label class="checkbox-container">
          <input type="checkbox" id="d5-opt2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Toques de punta de pie cruzados (45 seg)</strong>
            <img src="./ref-toe-touches.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Toe Touches">
            <p>De pie, levanta una pierna estirada e intenta tocarla con la mano contraria.</p>
          </div>
        </label>
        <label class="checkbox-container">
          <input type="checkbox" id="d5-opt3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Mountain climbers lentos (45 seg)</strong>
            <img src="./ref-mountain-climbers.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Mountain Climbers">
            <p>Lleva las rodillas al pecho sin saltar, con control total del abdomen.</p>
          </div>
        </label>
        <label class="checkbox-container">
          <input type="checkbox" id="d5-opt4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Plancha lateral (30 seg/lado)</strong>
            <img src="./ref-side-plank.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Plancha lateral">
            <p>Trabaja los oblicuos y la estabilidad. Apóyate en el antebrazo.</p>
          </div>
        </label>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fff5f5; border-left: 4px solid #FF3B30;">
        <h3 style="color: #FF3B30;"><i class="fas fa-exclamation-triangle"></i> Errores comunes</h3>
        <ul style="font-size: 0.95rem; padding-left: 1.2rem; color: var(--text-main); margin-top:0.5rem; margin-bottom: 0;">
          <li>No consumir suficientes calorías (no tendrás el "combustible" para crecer).</li>
          <li>Saltarte las comidas post-entrenamiento (la ventana anabólica es vital).</li>
          <li>Abusar de los alimentos procesados.</li>
          <li>Olvidarte de las grasas saludables.</li>
          <li>No prestar atención a la hidratación.</li>
        </ul>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d5-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>He asimilado toda esta información y estoy lista para crecer.</strong>
          </div>
        </label>
      </div>
    `
  },
  {
    day: 6,
    title: "Bandas de Resistencia",
    content: `
      <p>Las bandas de resistencia son herramientas versátiles, accesibles y altamente efectivas para mejorar la activación y el desarrollo muscular, especialmente en la zona de los glúteos. Estas bandas ofrecen resistencia constante durante todo el movimiento, lo que obliga a tus músculos a trabajar más duro tanto en la fase concéntrica (cuando contraes el músculo) como en la excéntrica (cuando lo estiras). Incorporarlas en tus rutinas puede ser el impulso que necesitas para llevar tus entrenamientos a un nuevo nivel.</p>
      
      <h3 style="margin-top:1.5rem; color:var(--primary);">Beneficios de las bandas:</h3>
      <ul style="font-size: 0.95rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 1.5rem;">
        <li>Mejoran la activación muscular y la conexión mente-músculo.</li>
        <li>Ayudan a aumentar la resistencia sin necesidad de pesas pesadas.</li>
        <li>Son ideales para trabajar los glúteos desde diferentes ángulos.</li>
        <li>Se pueden utilizar en cualquier lugar.</li>
        <li>Reducen el riesgo de lesiones al proporcionar una resistencia controlada.</li>
      </ul>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <h3 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-stopwatch"></i> Circuito con Bandas (45 min)</h3>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento:</strong> 5 a 10 minutos (estiramientos dinámicos, sentadillas sin peso).<br>
          <strong>Formato:</strong> 4 Rondas | 40s trabajo | 20s descanso | 1 min entre rondas.<br>
          <em>¡Usa el cronómetro flotante para medir tus tiempos!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d6-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Sentadillas con banda (15 reps)</strong>
            <img src="./ref-band-squat.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadilla con banda">
            <p>Coloca la banda justo encima de las rodillas. Mantén los pies al ancho de los hombros y realiza sentadillas profundas empujando las rodillas hacia afuera.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d6-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Puente de glúteos con banda (20 reps)</strong>
            <img src="./ref-bridge-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Puente de glúteos con banda">
            <p>Acuéstate boca arriba, coloca la banda sobre las rodillas y eleva la cadera apretando los glúteos en la parte superior.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d6-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Abducciones laterales (15 reps/lado)</strong>
            <img src="./ref-clamshell-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Abducciones laterales con banda">
            <p>De lado con la banda sobre las rodillas. Eleva la pierna superior lo más alto posible y baja lentamente.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d6-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Caminatas laterales (12 pasos/lado)</strong>
            <img src="./ref-monster-walk-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Caminatas laterales con banda">
            <p>En semi-sentadilla, da pasos laterales manteniendo la tensión en la banda. Trabaja el glúteo medio.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d6-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Patadas en cuadrupedia (15 reps/lado)</strong>
            <img src="./ref-kickback-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Patadas en cuadrupedia con banda">
            <p>A cuatro patas, banda sobre las rodillas. Eleva la pierna hacia atrás y arriba, apretando el glúteo.</p>
          </div>
        </label>
      </div>
      
      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Finaliza con estiramientos de 10 minutos enfocados en glúteos, caderas y piernas.</p>
    `
  },
  {
    day: 7,
    title: "Cardio y Medidas Semanales",
    content: `
      <!-- Felicitaciones de Anais -->
      <div class="welcome-card" style="background: linear-gradient(135deg, var(--primary) 0%, #FF8E53 100%); border-radius: 15px; padding: 1.5rem; color: white; margin-bottom: 1.5rem; text-align: center; box-shadow: 0 8px 15px rgba(255, 107, 107, 0.3);">
        <img src="./camila-avatar.png" alt="Anais Vidal" style="display: block; margin: 0 auto 1rem; width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
        <div>
          <h2 style="margin: 0 0 0.5rem 0; font-size: 1.4rem; color: white;">¡Felicidades por tu primera semana! 🏆</h2>
          <p style="margin: 0; font-size: 0.95rem; line-height: 1.5; color: rgba(255,255,255,0.95);">¡Lo lograste! Has terminado tus primeros 7 días con éxito. Estoy muy orgullosa de tu constancia. Hoy es el momento perfecto para ver los frutos de tu esfuerzo. Ingresa tus medidas actuales y veamos cuánto has progresado en solo una semana. ¡A seguir dándolo todo en el circuito de hoy!</p>
        </div>
      </div>
      
      <h3 style="margin-top:1.5rem; color:var(--primary);">1. Medición de Progreso (Semana 1)</h3>
      <div class="interactive-form" style="margin-bottom: 2rem;">
        <div class="form-group">
          <label>Circunferencia de glúteos (cm)</label>
          <input type="number" id="gluteos-d7-input" placeholder="Ej: 96">
          <p class="small-text" style="color: var(--secondary); font-weight: bold; margin-top: 0.3rem;" id="gluteos-d7-diff"></p>
        </div>
        <div class="form-group">
          <label>Circunferencia de cintura (cm)</label>
          <input type="number" id="cintura-d7-input" placeholder="Ej: 64">
          <p class="small-text" style="color: var(--secondary); font-weight: bold; margin-top: 0.3rem;" id="cintura-d7-diff"></p>
        </div>
        <div class="form-group">
          <label>Peso corporal (opcional) (kg)</label>
          <input type="number" id="peso-d7-input" placeholder="Ej: 59">
          <p class="small-text" style="color: var(--secondary); font-weight: bold; margin-top: 0.3rem;" id="peso-d7-diff"></p>
        </div>
        <button id="save-day7-medidas" class="primary-btn pulse" style="width: 100%; border-radius: 8px;">Comparar y Guardar</button>
      </div>

      <h3 style="margin-top:1.5rem; color:var(--primary);">Cardio Inteligente sin Perder Músculo</h3>
      <p>El cardio es fundamental para mejorar la salud cardiovascular, quemar grasa y aumentar la resistencia. Sin embargo, muchas personas cometen el error de realizar cardio excesivo o de baja intensidad prolongada, lo que puede llevar a la pérdida de masa muscular, incluyendo la que estás construyendo en tus glúteos. El objetivo de este día es enseñarte cómo incorporar cardio de forma inteligente, para que puedas quemar grasa sin sacrificar músculo.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Principios del cardio inteligente:</h4>
        <ul style="font-size: 0.95rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li><strong>Moderación:</strong> No es necesario pasar horas; 20-30 minutos bien realizados son suficientes.</li>
          <li><strong>HIIT:</strong> Alternar esfuerzo intenso con descanso quema grasa y preserva el músculo.</li>
          <li><strong>Enfócate en los glúteos:</strong> Subir escaleras, caminar en inclinación o sprints.</li>
          <li><strong>Después de las pesas:</strong> Así no gastas la energía necesaria para crecer músculo.</li>
        </ul>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <h3 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-stopwatch"></i> Circuito HIIT (30 min)</h3>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento:</strong> 5 min (Marcha rápida, elevaciones de rodillas).<br>
          <strong>Formato:</strong> 4 Rondas | 30s trabajo | 30s descanso | 1 min entre rondas.<br>
          <em>¡Usa el cronómetro flotante para medir tus tiempos!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d7-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Sprints en el lugar</strong>
            <img src="./ref-sprints.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sprints en el lugar">
            <p>Corre lo más rápido posible elevando las rodillas.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d7-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Jump squats (Sentadillas con salto)</strong>
            <img src="./ref-jump-squat.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Jump squats">
            <p>Enfócate en apretar los glúteos al aterrizar y amortiguar el salto.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d7-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Mountain climbers</strong>
            <img src="./ref-mountain-climbers.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Mountain climbers">
            <p>Trabaja la zona core y activa los glúteos llevando las rodillas al pecho en plancha.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d7-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Step-ups (alternando)</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Alterna las piernas en una silla o escalón, empujando desde el talón para activar los glúteos.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d7-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Lunges saltados</strong>
            <img src="./ref-lunge.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Lunge saltado">
            <p>Mantén el control para no dañar las rodillas y concéntrate en la estabilidad de tus glúteos.</p>
          </div>
        </label>
      </div>
      
      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Finaliza con estiramientos (5 min) y caminata lenta para bajar el ritmo cardíaco.</p>

      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 1rem; border-radius: 4px; margin-top: 1.5rem;">
        <strong><i class="fas fa-exclamation-triangle"></i> ¡Atención para mañana!</strong><br>
        Mañana volvemos a la acción de fuerza. Necesitaremos una <strong>Banda de Resistencia</strong>, una <strong>Silla o cajón</strong> para los step-ups, y de forma opcional <strong>Mancuernas (o botellas de agua grandes)</strong>.
      </div>
    `
  },
  {
    day: 8,
    title: "Fuerza y Progresión",
    content: `
      <p>En esta fase (Día 8 a 10), nos enfocaremos en la <strong>progresión</strong>. Hasta ahora trabajaste activación y conexión mente-músculo; a partir de aquí, es esencial aumentar la intensidad para evitar el estancamiento y continuar desafiando a tus glúteos. Si no cambias el estímulo, tus músculos dejarán de responder.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Rutina de Hoy: Glúteo Mayor</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Duración:</strong> 55 minutos.<br>
          <strong>Calentamiento (10 min):</strong> 20 sentadillas, movilidad cadera, 15 puentes, 12 caminatas laterales, 5 min estiramientos.<br>
          <strong>Formato Principal:</strong> 4 Rondas | 12 reps por ejercicio | 45s descanso entre ejercicios.<br>
          <em>¡Usa el cronómetro flotante para tus 45s de descanso!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d8-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Hip thrusts en el suelo con banda (12 reps)</strong>
            <img src="./ref-bridge-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrusts con banda">
            <p>Banda sobre las rodillas. Eleva la cadera y mantén 2 segundos arriba antes de bajar.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d8-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Sentadillas sumo con pulsaciones (12 reps)</strong>
            <img src="./ref-sumo.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadilla sumo">
            <p>Piernas más abiertas que los hombros. Baja y realiza tres pequeñas pulsaciones abajo antes de subir.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d8-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Puente con una pierna elevada (12 reps/pierna)</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Puente a una pierna">
            <p>Estira una pierna hacia arriba y eleva la cadera empujando con la otra pierna.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d8-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Lunges caminando (24 pasos totales)</strong>
            <img src="./ref-lunge.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Lunges">
            <p>Da un paso largo hacia adelante y baja la rodilla trasera. Alterna las piernas (con o sin peso).</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d8-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Step-ups en silla (10 reps/pierna)</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Sube y baja empujando desde el talón, enfocándote en la contracción de los glúteos.</p>
          </div>
        </label>
      </div>
      
      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Enfriamiento (10 min): Estiramiento de glúteos, postura paloma, isquiotibiales y respiración profunda.</p>

      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 1rem; border-radius: 4px; margin-top: 1.5rem;">
        <strong><i class="fas fa-exclamation-triangle"></i> ¡Atención para mañana!</strong><br>
        Mañana trabajaremos el glúteo medio y estabilidad. ¡Ten a mano tu <strong>Banda de Resistencia</strong>!
      </div>
    `
  },
  {
    day: 9,
    title: "Glúteo Medio y Estabilidad",
    content: `
      <p>El glúteo medio es esencial para la estabilidad de la cadera y la prevención de lesiones. Además, contribuye a esa <strong>forma redondeada</strong> de los glúteos y mejora tu rendimiento físico diario. Hoy nos enfocaremos 100% en ejercicios laterales y de abducción.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Rutina de Hoy: Enfoque Lateral</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Duración:</strong> 50 minutos.<br>
          <strong>Calentamiento (8 min):</strong> Caminatas laterales con banda (2x10), 15 sentadillas, 20 puentes con pulso, 3 min movilidad.<br>
          <strong>Formato Principal:</strong> 5 Rondas | 40s trabajo | 20s descanso.<br>
          <em>¡Usa el cronómetro flotante para guiarte en cada intervalo!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d9-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Abducciones de cadera de pie (15 reps/pierna)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Abducción de pie">
            <p>Apóyate en una pared y eleva la pierna lateralmente con mucho control, sintiendo el lado del glúteo.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d9-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Clamshells con banda (20 reps/lado)</strong>
            <img src="./ref-clamshell-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Clamshells con banda">
            <p>Acuéstate de lado con las piernas flexionadas y abre las rodillas manteniendo los pies juntos.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d9-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Elevaciones laterales de pierna (15 reps/lado)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Elevación lateral">
            <p>Acuéstate de lado (o mantente de pie) y eleva la pierna superior lentamente, sin balancear.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d9-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Fire hydrants (20 reps/pierna)</strong>
            <img src="./ref-hydrant.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Fire Hydrant">
            <p>En posición de cuadrupedia, eleva la pierna hacia el lado manteniendo la rodilla flexionada.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d9-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Caminatas laterales con banda (12 pasos/lado)</strong>
            <img src="./ref-monster-walk-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Caminatas laterales con banda">
            <p>Mantén la posición semi-sentadilla y da pasos laterales con tensión constante en la banda.</p>
          </div>
        </label>
      </div>
      
      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Enfriamiento (10 min): Estiramiento de glúteo medio, rotación de caderas y respiración relajante.</p>
    `
  },
  {
    day: 10,
    title: "Rutina Combinada y Nutrición",
    content: `
      <p>Hoy combinaremos ejercicios para trabajar el glúteo mayor, medio y menor en una rutina integral. Además, revisaremos claves de nutrición fundamentales para optimizar tu recuperación tras esta intensa semana.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Rutina Integral (60 min)</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento (10 min):</strong> 20 sentadillas, 4 min movilidad, caminatas laterales (10/lado), 20 elevaciones de talón.<br>
          <strong>Formato Principal:</strong> 4 Rondas | 15 reps por ejercicio.
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d10-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Hip thrust con banda + pulsaciones (15 reps + 5 pulsaciones)</strong>
            <img src="./ref-bridge-band.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrust con banda">
            <p>Mantén la contracción en la parte superior y termina con 5 pulsaciones cortitas arriba.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d10-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Sentadilla búlgara (12 reps/pierna)</strong>
            <img src="./ref-bulgarian.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadilla búlgara">
            <p>Apoya el pie trasero en una silla y baja controlando el movimiento. Mantén el peso en el talón delantero.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d10-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Zancadas caminando con elevación de rodilla (12 pasos/pierna)</strong>
            <img src="./ref-lunge.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Lunge caminando">
            <p>Al subir de la zancada (lunge), eleva la rodilla trasera hacia el pecho. Ayuda a trabajar estabilidad y fuerza.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d10-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Step-ups con banda (10 reps/pierna)</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Sube a la silla con control, enfocándote en la contracción del glúteo al empujar.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d10-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Fire hydrants con banda (20 reps/lado)</strong>
            <img src="./ref-hydrant.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Fire Hydrant">
            <p>Mejora la activación lateral. Usa tu banda elástica sobre las rodillas.</p>
          </div>
        </label>
      </div>
      
      <h3 style="margin-top:2rem; color:var(--primary);">Nutrición Clave para la Recuperación</h3>
      <p>Después de una semana intensa, es fundamental ajustar tu alimentación para optimizar la recuperación, reducir la inflamación y preparar el cuerpo para la siguiente fase.</p>
      
      <div class="nutrition-card" style="background:#fff; border-radius:12px; padding:1.5rem; margin-bottom:1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
          <img src="./ref-nutri-protein.png?v=56" alt="Proteínas" style="width:50px; height:50px; object-fit:cover; border-radius:8px; margin-right:15px; border:2px solid #FF107A;">
          <div>
            <h4 style="margin:0; color:var(--primary);">Proteínas</h4>
            <p style="margin:0; font-size:0.85rem; color:#666;">1.8 - 2.2 g/kg de peso corporal</p>
          </div>
        </div>
        <p style="font-size:0.9rem;">Reparan las fibras musculares rotas durante el entrenamiento.</p>
        
        <div style="display: flex; align-items: center; margin-bottom: 1rem; margin-top: 1.5rem;">
          <img src="./ref-nutri-carbs.png?v=56" alt="Carbohidratos" style="width:50px; height:50px; object-fit:cover; border-radius:8px; margin-right:15px; border:2px solid #FF107A;">
          <div>
            <h4 style="margin:0; color:var(--primary);">Carbohidratos</h4>
            <p style="margin:0; font-size:0.85rem; color:#666;">Avena, arroz integral, batatas</p>
          </div>
        </div>
        <p style="font-size:0.9rem;">Reponen las reservas de glucógeno y te dan energía para el próximo entrenamiento.</p>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid #00E5FF;">
        <h4 style="color: #008899; margin-bottom: 0.5rem;"><i class="fas fa-tint"></i> Hidratación y Grasas</h4>
        <ul style="font-size: 0.95rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li><strong>Grasas saludables:</strong> Aguacate, nueces y aceite de oliva (apoyan producción hormonal).</li>
          <li><strong>Agua:</strong> Al menos 2.5 litros diarios. Puedes sumar agua de coco.</li>
        </ul>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fff3f8; border-radius: 12px; padding: 1.5rem;">
        <h4 style="color: var(--primary); margin-bottom: 1rem; text-align: center;">Ejemplo Comida Post-Entreno 🥗</h4>
        <ul style="list-style: none; padding: 0; text-align: center; margin-bottom: 0;">
          <li style="margin-bottom: 0.5rem;">🍗 Pechuga de pollo a la plancha</li>
          <li style="margin-bottom: 0.5rem;">🍚 Quinoa cocida</li>
          <li style="margin-bottom: 0.5rem;">🥑 Ensalada verde con aguacate y aceite de oliva</li>
          <li>🍓 Fruta (plátano o fresas)</li>
        </ul>
      </div>

      <p style="font-size: 0.95rem; background: #fafafa; padding: 1rem; border-radius: 8px;">
        <strong>Consejos Extra:</strong> Duerme entre 7 y 9 horas. Incluye días de descanso activo (caminatas ligeras o yoga). Prioriza alimentos antiinflamatorios como jengibre y cúrcuma.
      </p>

      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--primary); font-weight: bold;">
        Durante estos días has llevado tus entrenamientos al siguiente nivel. La constancia comienza a dar frutos. ¡Alimenta tu motivación, escucha a tu cuerpo y mantén el enfoque!
      </p>
    `
  },
  {
    day: 11,
    title: "Aumento de Carga",
    content: `
      <p>¡Bienvenida a la <strong>Fase 3: Progresión y Resistencia</strong>! La progresión en carga y repeticiones es fundamental para que tus músculos sigan respondiendo y creciendo. Si tu cuerpo se acostumbra, dejarás de ver cambios.</p>
      <p>El aumento de carga puede lograrse con pesas, bandas más fuertes o botellas con agua/mochilas pesadas. Si no tienes peso, aumenta las repeticiones, la velocidad de ejecución o el tiempo bajo tensión.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Rutina de Alta Intensidad (60 min)</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento (10 min):</strong> 3 min caminata/saltos suaves, 20 sentadillas, 3 min movilidad, 15 puentes con pulso.<br>
          <strong>Formato Principal:</strong> 5 Rondas | 15 reps por ejercicio | 45s descanso entre ejercicios.<br>
          <em>¡Usa el cronómetro flotante para tus descansos!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d11-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Hip thrusts con carga (15 reps)</strong>
            <img src="./ref-thrust-weight.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrust con peso">
            <p>Utiliza una mochila con peso o pesa en las caderas. Mantén la contracción en la parte alta por 3 segundos.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d11-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Sentadillas búlgaras con peso (12 reps/pierna)</strong>
            <img src="./ref-bulgarian-weight.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadillas búlgaras con peso">
            <p>Usa una botella con agua o cualquier objeto pesado en las manos.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d11-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Zancadas caminando con carga (14 pasos/pierna)</strong>
            <img src="./ref-lunge-weight.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Zancadas con carga">
            <p>Enfócate en empujar desde el talón para activar los glúteos al avanzar.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d11-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Step-ups con mochila (10 reps/pierna)</strong>
            <img src="./ref-stepup-backpack.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up con mochila">
            <p>Sube de forma controlada a una silla o banco con peso extra en la espalda o manos.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d11-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Puente de glúteos con banda y peso (20 reps)</strong>
            <img src="./ref-bridge-band-weight.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Puente de glúteos con banda y peso">
            <p>Mantén la tensión en la banda mientras elevas, con peso en la pelvis.</p>
          </div>
        </label>
      </div>

      <p style="font-size: 0.95rem; background: #fafafa; padding: 1rem; border-radius: 8px;">
        <strong>Consejos de Progresión:</strong> Si no tienes peso adicional, aumenta las repeticiones a 20-25 por serie. Disminuye los tiempos de descanso. Añade pulsaciones abajo para mayor intensidad.
      </p>
    `
  },
  {
    day: 12,
    title: "Evitar el Estancamiento (Superseries)",
    content: `
      <p>El estancamiento es uno de los desafíos más frustrantes. Ocurre cuando tu cuerpo se adapta al esfuerzo y deja de responder. Para evitarlo, hoy aplicaremos variación de estímulos mediante <strong>Superseries</strong>.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Rutina Anti-Estancamiento (55 min)</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento (10 min):</strong> 20 sentadillas, 15 puentes con banda, 3 min movilidad.<br>
          <strong>Formato Principal (Superseries):</strong> 4 Rondas. Haz el Ejercicio A y luego el Ejercicio B <em>sin descanso</em>. Descansa 1 minuto al terminar la ronda.<br>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d12-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Superserie 1: Thrust & Sumo</strong>
            <p style="margin-bottom: 0.5rem;">- Hip thrusts con peso (15 reps)<br>- Sentadilla sumo con pulsaciones (15 reps)</p>
            <div style="display:flex; gap:10px;">
              <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0; width: 45%;" alt="Hip thrust">
              <img src="./ref-sumo.png" class="mini-ref-img" style="margin-top:0; width: 45%;" alt="Sentadilla Sumo">
            </div>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d12-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Superserie 2: Zancadas & Hydrants</strong>
            <p style="margin-bottom: 0.5rem;">- Zancadas inversas (10 reps/pierna)<br>- Fire hydrants con banda (20 reps/lado)</p>
            <div style="display:flex; gap:10px;">
              <img src="./ref-lunge.png" class="mini-ref-img" style="margin-top:0; width: 45%;" alt="Lunge">
              <img src="./ref-hydrant.png" class="mini-ref-img" style="margin-top:0; width: 45%;" alt="Hydrant">
            </div>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d12-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Superserie 3: Step-ups & Puente 1 pierna</strong>
            <p style="margin-bottom: 0.5rem;">- Step-ups con carga (15 reps)<br>- Puente de glúteos a 1 pierna (12 reps/pierna)</p>
            <div style="display:flex; gap:10px;">
              <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0; width: 45%;" alt="Step-up">
              <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; width: 45%; display:flex; flex-direction:column; justify-content:center;">
                <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i>
                <span style="color: #888; font-size: 0.75rem; font-weight: bold;">[Imagen Pendiente]</span>
              </div>
            </div>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d12-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Finalizador: Caminatas laterales</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>3 rondas de 15 pasos por lado con banda. ¡Para quemar al máximo el glúteo medio!</p>
          </div>
        </label>
      </div>

      <h3 style="margin-top:2rem; color:var(--primary);">Estrategias Clave</h3>
      <div style="background:#fff; border-radius:12px; padding:1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <ul style="padding-left:1.2rem; font-size:0.95rem; margin-bottom:0; color:var(--text-main);">
          <li style="margin-bottom:0.5rem;"><strong>Varía los ejercicios:</strong> Cambia el orden o incluye nuevos.</li>
          <li style="margin-bottom:0.5rem;"><strong>Aumenta la carga:</strong> Suma peso extra o usa bandas más fuertes.</li>
          <li style="margin-bottom:0.5rem;"><strong>Ajusta las series/reps:</strong> Sube a 15 o 20 si hacias 12.</li>
          <li style="margin-bottom:0.5rem;"><strong>Modifica descansos:</strong> Bajar a 30s da un estímulo más cardiovascular.</li>
          <li><strong>Usa superseries:</strong> Lo que estamos haciendo hoy.</li>
        </ul>
      </div>
      
      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Enfriamiento (10 min): Estiramientos profundos de glúteos y caderas.</p>
    `
  },
  {
    day: 13,
    title: "Fuerza Máxima (Día 13-15)",
    content: `
      <p>¡Iniciamos las sesiones avanzadas! Estos 3 días llevarán tu entrenamiento al siguiente nivel, combinando fuerza, resistencia y trabajo funcional. <em>(Recuerda que en el Día 15 haremos tu evaluación intermedia).</em></p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Circuito de Fuerza Máxima (60 min)</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento (10 min):</strong> Movilidad general, 20 sentadillas, 15 puentes con banda.<br>
          <strong>Formato Principal:</strong> 5 Rondas | 10 reps por ejercicio.<br>
          <em>¡Usa la carga máxima que puedas manejar manteniendo una técnica perfecta!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d13-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Hip thrusts con carga elevada (10 reps)</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrust">
            <p>Mantén la contracción extrema en la parte alta durante 4 segundos completos en cada repetición.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d13-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Sentadilla frontal con carga (10 reps)</strong>
            <img src="./ref-squat.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadilla Frontal">
            <p>Utiliza una mochila muy pesada abrazada al frente o mancuernas.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d13-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Step-ups con peso (12 reps/pierna)</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Empuja siempre desde el talón que está en la silla para obligar al glúteo a subirte.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d13-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Lunges búlgaros con banda y peso (10 reps/pierna)</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>Doble resistencia. Enfócate al máximo en mantener el equilibrio y la técnica pura.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d13-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Elevaciones laterales con banda (20 reps/lado)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Elevación Lateral">
            <p>Trabajamos directo el glúteo medio y estabilizadores.</p>
          </div>
        </label>
      </div>

      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Enfriamiento (10 min): Postura de la paloma, estiramiento profundo de isquiotibiales y cuádriceps.</p>
    `
  },
  {
    day: 14,
    title: "Entrenamiento Funcional + Cardio",
    content: `
      <p>¡Has llegado a los 2/3 del programa! Hoy combinamos entrenamiento funcional y cardio para mejorar tu resistencia y quemar grasa.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Circuito Funcional (50 min)</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento (8 min):</strong> 2 min saltos suaves, 3 min movilidad articular, 15 puentes de glúteos con pulsaciones.<br>
          <strong>Formato Principal:</strong> 4 Rondas | 40s trabajo x 20s descanso.<br>
          <em>¡Usa tu cronómetro flotante para guiarte en los intervalos!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d14-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Jump squats (Sentadilla con salto)</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>Salta explosivamente desde la posición de sentadilla.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d14-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Step-ups rápidos con carga</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Trabaja la potencia y resistencia a velocidad alta.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d14-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Zancadas laterales con banda</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>Fortalece glúteos y aductores (parte interna de la pierna).</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d14-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Mountain climbers</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>En posición de plancha, lleva rodillas al pecho. Mejora el cardio y la estabilidad del core.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d14-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Hip thrusts con pulsaciones</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrust">
            <p>Finaliza con contracciones máximas en la parte alta.</p>
          </div>
        </label>
      </div>

      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Enfriamiento (10 min): Caminata ligera y estiramientos profundos.</p>
    `
  },
  {
    day: 15,
    title: "Evaluación Intermedia y Reajuste",
    content: `
      <p>¡Llegar al Día 15 es un gran logro! Es normal notar ya mejoras en fuerza, resistencia y tonificación. Hoy es el día para evaluar tus avances y celebrar tu progreso.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">I. Medición de Progreso</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          Realizarás las mismas mediciones que al inicio del programa para comparar resultados. ¡También tómate fotos de frente, perfil y espalda!
        </p>
      </div>

      <div class="interactive-form" style="margin-bottom: 2rem;">
        <div class="form-group">
          <label>Circunferencia de glúteos (cm)</label>
          <input type="number" id="gluteos-d15-input" placeholder="Ej: 98">
          <p class="small-text" style="color: var(--secondary); font-weight: bold; margin-top: 0.3rem;" id="gluteos-d15-diff"></p>
        </div>
        <div class="form-group">
          <label>Circunferencia de cintura (cm)</label>
          <input type="number" id="cintura-d15-input" placeholder="Ej: 63">
          <p class="small-text" style="color: var(--secondary); font-weight: bold; margin-top: 0.3rem;" id="cintura-d15-diff"></p>
        </div>
        <div class="form-group">
          <label>Peso corporal (opcional) (kg)</label>
          <input type="number" id="peso-d15-input" placeholder="Ej: 58">
          <p class="small-text" style="color: var(--secondary); font-weight: bold; margin-top: 0.3rem;" id="peso-d15-diff"></p>
        </div>
        <button id="save-day15-medidas" class="primary-btn pulse" style="width: 100%; border-radius: 8px;">Comparar y Guardar</button>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--primary);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">II. Pruebas Físicas (1 minuto)</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 1rem;">
          Mide tu resistencia máxima realizando la mayor cantidad de repeticiones posibles en 60 segundos con buena técnica.
        </p>
        <div class="form-group">
          <label>Sentadillas en 1 minuto</label>
          <input type="number" id="d15-squats" placeholder="Ej: 45">
        </div>
        <div class="form-group">
          <label>Hip Thrusts en 1 minuto</label>
          <input type="number" id="d15-thrusts" placeholder="Ej: 38">
        </div>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">III. Análisis de Resultados</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0.5rem;">Responde a estas preguntas para ti misma:</p>
        <ul style="font-size: 0.9rem; color: var(--text-main); padding-left: 1.2rem; margin-bottom: 0;">
          <li>¿Has aumentado la fuerza y resistencia?</li>
          <li>¿Notas mayor firmeza y tonificación en los glúteos?</li>
          <li>¿Cómo te sientes comparado con el Día 1?</li>
        </ul>
      </div>

      <h3 style="margin-top:2rem; color:var(--primary);">IV. Rutina Ligera (30 min)</h3>
      <p>Tras la evaluación, realiza este bloque regenerativo para no sobrecargar el cuerpo.</p>
      
      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d15-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Sentadillas con peso corporal (15 reps)</strong>
            <img src="./ref-squat.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadillas">
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d15-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Puentes de glúteos (20 reps)</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d15-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Estiramientos de cadera y espalda baja</strong>
            <img src="./ref-str-hips.png?v=55" class="mini-ref-img" style="margin-top:0.5rem;" alt="Estiramientos">
            <p>Mantén cada postura por 30 segundos.</p>
          </div>
        </label>
      </div>

      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">La segunda mitad del programa será clave para consolidar y potenciar estos resultados. ¡Sigue dándolo todo!</p>
    `
  },
  {
    day: 16,
    title: "Cardio y Glúteos",
    content: `
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Combinaciones Efectivas (45-60 min)</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          Es momento de enfocarse en definir y esculpir los glúteos combinando cardio HIIT con fuerza.
        </p>
      </div>
      
      <p style="font-size: 0.9rem; font-style: italic;"><strong>Calentamiento (10 min):</strong> 2 rondas de marcha rodillas altas (2 min), 15 sentadillas sin peso, círculos cadera (1 min/lado), caminatas banda (10/lado), puente con pulsaciones (15 reps).</p>

      <h3 style="margin-top:1.5rem; color:var(--primary);">Bloque 1: Cardio + Activación (15 min)</h3>
      <p style="font-size:0.85rem; color:var(--text-main);"><strong>Formato:</strong> 3 Rondas | 40s trabajo x 20s descanso | 1 min descanso entre rondas.</p>
      
      <div class="interactive-form" style="margin-bottom: 1.5rem;">
        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Jump squats (Sentadillas con salto)</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>Apretar glúteos al aterrizar.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Caminatas laterales con banda</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>Mantén la tensión y da pasos amplios.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Step-ups en silla</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Empuja desde el talón al subir.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Elevaciones de cadera con banda</strong>
            <img src="./ref-thrust-pulse.png" alt="Elevaciones de cadera con banda" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Mantén 2 segundos de contracción arriba.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Jumping lunges (zancadas con salto)</strong>
            <img src="./ref-jump-lunge.png" alt="Jumping lunges" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Espalda recta y movimiento controlado.</p>
          </div>
        </label>
      </div>

      <h3 style="margin-top:2rem; color:var(--primary);">Bloque 2: Fuerza + Cardio (25 min)</h3>
      <p style="font-size:0.85rem; color:var(--text-main);"><strong>Formato:</strong> 4 Rondas por par | Seguidos sin descanso | 45s descanso antes de cambiar de par.</p>
      
      <div class="interactive-form" style="margin-bottom: 1.5rem;">
        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex6">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>Par 1: Hip thrusts con banda (15) + Burpees (10)</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrust">
            <p>Fuerza y explosión cardíaca.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex7">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>Par 2: Zancadas caminando (12/pierna) + Mountain climbers (40s)</strong>
            <img src="./ref-lunge.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Lunge">
            <p>Empuja desde el talón en las zancadas.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex8">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>Par 3: Sentadilla sumo con peso (15) + Jump squats (12)</strong>
            <img src="./ref-sumo.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sumo">
            <p>Fuerza profunda en glúteos seguida de salto.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex9">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>Par 4: Elev. laterales banda (15/lado) + Sprints (40s)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Elevación Lateral">
            <p>Glúteo medio y rodillas altas corriendo en el lugar.</p>
          </div>
        </label>
      </div>

      <h3 style="margin-top:2rem; color:var(--primary);">Bloque 3: Resistencia (10 min)</h3>
      <p style="font-size:0.85rem; color:var(--text-main);"><strong>Formato:</strong> 2 Rondas.</p>
      
      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex10">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Puente isométrico (45s)</strong>
            <img src="./ref-bridge-hold.png" alt="Puente isométrico" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Mantén cadera elevada y contraída.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex11">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Sentadilla estática pared (1 min)</strong>
            <img src="./ref-wall-sit.png" alt="Sentadilla estática pared" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Mantén la posición isométrica como si estuvieras sentada.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex12">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Elev. a cuatro patas (15/lado)</strong>
            <img src="./ref-kickback.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Patada">
            <p>Lento y controlado.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d16-ex13">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Plancha elev. pierna (30s/lado)</strong>
            <img src="./ref-plank.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Plancha">
            <p>Trabaja core y glúteos simultáneamente.</p>
          </div>
        </label>
      </div>

      <p style="margin-top:1.5rem; text-align:center; font-style: italic; color:var(--text-main);">Enfriamiento (10 min): Paloma (1 min/pierna), glúteos acostado (30s/lado), isquios (1 min/pierna).</p>
    `
  },
  {
    day: 17,
    title: "Nutrición para Definición",
    content: `
      <p>En esta etapa, el objetivo principal es reducir la grasa corporal para que la musculatura trabajada se haga más visible, manteniendo la masa muscular que has ganado. Esto se logra con un déficit calórico moderado y un aporte óptimo de macronutrientes.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-calculator"></i> Calcula tu Déficit Calórico</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 1rem;">
          Ingresa tu peso actual para calcular tus calorías diarias recomendadas para definir.
        </p>
        <div class="form-group">
          <label>Tu peso corporal (kg)</label>
          <input type="number" id="d17-peso" placeholder="Ej: 60">
        </div>
        <button id="d17-calc-btn" class="primary-btn" style="width:100%; border-radius:8px; padding:0.6rem;">Calcular</button>
        
        <div id="d17-results" style="display:none; margin-top: 1rem; padding: 1rem; background: #ffebee; border-radius: 8px;">
          <p style="margin-bottom:0.5rem; color: #d32f2f;"><strong>Mantenimiento:</strong> <span id="d17-maint"></span> kcal</p>
          <p style="margin-bottom:0; color: #388e3c; font-size:1.1rem;"><strong>Objetivo (Definición):</strong> <span id="d17-def"></span> kcal</p>
        </div>
      </div>

      <h3 style="color:var(--primary); margin-top:1.5rem;">Distribución de Macronutrientes</h3>
      <p>La clave para perder grasa y mantener músculo:</p>
      <ul class="styled-list">
        <li><strong>Proteínas (2-2.5g por kg):</strong> Pollo, pavo, pescado, huevos, yogur griego, tofu. Mantienen la saciedad y evitan pérdida muscular.</li>
        <li><strong>Carbohidratos (2-3g por kg):</strong> Avena, arroz integral, quinoa, batatas, frutas. Dan energía para entrenar.</li>
        <li><strong>Grasas Saludables (20-25%):</strong> Aguacate, frutos secos, semillas, aceite de oliva. Regulan hormonas.</li>
      </ul>

      <h3 style="color:var(--primary); margin-top:1.5rem;">Alrededor del Entrenamiento</h3>
      <div class="content-card" style="margin-bottom: 1rem; border-left: 4px solid #ff9800;">
        <strong>Antes (1-2 horas):</strong> Carbohidratos + proteínas (Ej: Pan integral con pavo y plátano).
      </div>
      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid #4caf50;">
        <strong>Después (menos de 1 hora):</strong> Carbos rápidos + proteínas (Ej: Batido de proteína + banana).
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid #f44336;">
        <h4 style="color: #f44336; margin-bottom: 0.5rem;"><i class="fas fa-exclamation-triangle"></i> Errores Comunes a Evitar</h4>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; margin-bottom: 0;">
          <li><strong>Reducir drásticamente calorías:</strong> Ralentiza el metabolismo y pierdes músculo.</li>
          <li><strong>Eliminar carbohidratos por completo:</strong> Disminuye la energía y el rendimiento.</li>
          <li><strong>Saltarse comidas:</strong> Puede llevar a atracones posteriores.</li>
          <li><strong>Olvidar hidratarse:</strong> Necesitas 2.5 a 3 litros de agua al día.</li>
        </ul>
      </div>

      <h3 style="color:var(--primary); margin-top:1.5rem;">Bonus: Yoga para Glúteos</h3>
      <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 1rem;">La relajación muscular y el flujo sanguíneo también son clave en el proceso de definición. Complementa tu día de nutrición con estas dos posturas restaurativas para relajar la cadera y los glúteos.</p>
      
      <div class="interactive-form" style="margin-bottom: 1.5rem;">
        <label class="checkbox-container">
          <input type="checkbox" id="d17-yoga1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Postura de la Paloma (2 min por pierna)</strong>
            <img src="./ref-str-pigeon.png?v=55" class="mini-ref-img" style="margin-top:0.5rem;" alt="Postura Paloma">
            <p style="margin-bottom:0.3rem;">Estira profundamente el piramidal y libera tensión acumulada.</p>
            <ul style="font-size:0.85rem; padding-left:1.2rem; color:var(--text-main); margin-top:0;">
              <li>Desde plancha, lleva la rodilla hacia la muñeca del mismo lado.</li>
              <li>Cruza un poco el pie hacia el centro y baja las caderas.</li>
              <li>Estira la pierna trasera y baja el pecho hacia el suelo.</li>
            </ul>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d17-yoga2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Postura del Guerrero 2 (1 min por pierna)</strong>
            <img src="./ref-warrior2.png" alt="Postura del Guerrero 2" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p style="margin-bottom:0.3rem;">Fortalece isométricamente glúteos y cuádriceps.</p>
            <ul style="font-size:0.85rem; padding-left:1.2rem; color:var(--text-main); margin-top:0;">
              <li>Da un paso largo atrás y gira ese pie a 90°.</li>
              <li>Flexiona la rodilla delantera sobre el tobillo.</li>
              <li>Abre brazos paralelos al suelo y aprieta glúteos fuerte.</li>
            </ul>
          </div>
        </label>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d17-read">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>He leído y calculado mis macros</strong>
            <p>Estoy lista para aplicar esta nutrición estratégica.</p>
          </div>
        </label>
      </div>
    `
  },
  {
    day: 18,
    title: "Rutina integral de glúteos y tren inferior",
    content: `
      <p>En este día, trabajarás todas las áreas de los glúteos (mayor, medio y menor) con énfasis en la resistencia muscular. Se combinarán ejercicios bilaterales (ambas piernas) y unilaterales (una pierna a la vez) para mejorar la estabilidad y prevenir desbalances musculares.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Calentamiento (10 minutos):</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0.5rem;">Antes de iniciar, realiza el siguiente calentamiento para preparar músculos y articulaciones:</p>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li>Marcha rápida con elevación de rodillas (2 minutos)</li>
          <li>Círculos de cadera (1 minuto por lado)</li>
          <li>Sentadillas con peso corporal (15 repeticiones)</li>
          <li>Puente de glúteos con banda (20 repeticiones)</li>
          <li>Caminatas laterales con banda (10 pasos por lado)</li>
        </ul>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <h3 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-stopwatch"></i> Rutina Principal (4 rondas)</h3>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Formato:</strong> 45 segundos de trabajo | 20 segundos de descanso entre ejercicios.<br>
          <em>¡Usa el cronómetro flotante para medir tus tiempos!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d18-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Hip thrusts con carga</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrust">
            <p>Eleva la cadera y mantén la contracción durante 3 segundos en la parte alta.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d18-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Sentadillas búlgaras (12 rep/pierna)</strong>
            <img src="./ref-bulgarian.png" alt="Sentadillas búlgaras" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Coloca un pie en una silla y baja controlando el movimiento.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d18-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Step-ups con peso (15 rep/pierna)</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Empuja desde el talón y enfócate en la activación del glúteo.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d18-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Zancadas inversas con peso (12 rep/pierna)</strong>
            <img src="./ref-lunge.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Zancada">
            <p>Mantén la espalda recta y baja hasta que la rodilla trasera toque suavemente el suelo.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d18-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Puente de glúteos con banda y pulsaciones (20 rep + 10 pulso)</strong>
            <img src="./ref-thrust-pulse.png" alt="Puente de glúteos con banda y pulsaciones" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Mantén la cadera arriba y realiza pequeños rebotes al final.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d18-ex6">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>6. Fire hydrants con banda (20 rep/lado)</strong>
            <img src="./ref-hydrant.png" alt="Fire hydrants con banda" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Trabaja el glúteo medio y la estabilidad.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d18-ex7">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>7. Jump squats (15 rep)</strong>
            <img src="./ref-jump-squat.png" alt="Jump squats" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Realiza un salto explosivo desde la sentadilla, enfocándote en apretar los glúteos al aterrizar.</p>
          </div>
        </label>
      </div>
      
      <div class="content-card" style="margin-top: 1.5rem; background: #fafafa; border-left: 4px solid var(--primary);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Enfriamiento (10 minutos):</h4>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li>Estiramiento de glúteos acostado (30 segundos por lado)</li>
          <li>Postura de la paloma (1 minuto por pierna)</li>
          <li>Estiramiento de isquiotibiales (1 minuto por pierna)</li>
          <li>Respiración profunda para relajar el cuerpo (2 minutos)</li>
        </ul>
      </div>
    `
  },
  {
    day: 19,
    title: "Cardio HIIT + resistencia muscular",
    content: `
      <p>Este día se centra en combinar cardio de alta intensidad con ejercicios de resistencia muscular. El objetivo es quemar grasa, mejorar la capacidad cardiovascular y mantener la musculatura trabajada.</p>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Calentamiento (10 minutos):</h4>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li>Marcha en el lugar con movimiento de brazos (2 minutos)</li>
          <li>Jumping jacks (2 minutos)</li>
          <li>Sentadillas con brazos extendidos (15 repeticiones)</li>
          <li>Elevaciones de talones (20 repeticiones)</li>
          <li>Círculos de cadera y movilidad articular (3 minutos)</li>
        </ul>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <h3 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-stopwatch"></i> Circuito HIIT + Glúteos (5 rondas)</h3>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Formato:</strong> 40 segundos de trabajo | 20 segundos de descanso entre ejercicios.<br>
          <strong>Descanso entre rondas:</strong> 1 minuto.<br>
          <em>¡Usa el cronómetro flotante para medir tus tiempos!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d19-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Jump squats</strong>
            <img src="./ref-jump-squat.png" alt="Jump squats" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Trabaja la potencia y la activación de glúteos.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d19-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Step-ups rápidos con peso</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Realiza el movimiento lo más rápido posible manteniendo la técnica.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d19-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Mountain climbers</strong>
            <img src="./ref-mountain-climbers.png" alt="Mountain climbers" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Mejora la resistencia cardiovascular y trabaja el core.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d19-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Puente de glúteos con banda</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Puente">
            <p>Mantén la contracción 2 segundos en la parte alta.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d19-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Zancadas laterales con banda (15 rep/lado)</strong>
            <img src="./ref-side-lunge.png" alt="Zancadas laterales con banda" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Trabaja el glúteo medio y los aductores.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d19-ex6">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>6. Elevaciones laterales de pierna (15 rep/lado)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Elevación lateral">
            <p>Mejora la estabilidad y tonificación lateral.</p>
          </div>
        </label>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fff5f5; border-left: 4px solid #FF3B30;">
        <h4 style="color: #FF3B30; margin-bottom: 0.5rem;">Trabajo Final (10 minutos):</h4>
        <div class="interactive-form" style="margin-bottom:0;">
          <label class="checkbox-container" style="margin-bottom:1rem;">
            <input type="checkbox" id="d19-fin1">
            <span class="checkmark"></span>
            <div class="checkbox-text">
              <strong>Puente isométrico (1 minuto)</strong>
              <p>Mantén la cadera elevada y aprieta los glúteos.</p>
            </div>
          </label>
          <label class="checkbox-container" style="margin-bottom:1rem;">
            <input type="checkbox" id="d19-fin2">
            <span class="checkmark"></span>
            <div class="checkbox-text">
              <strong>Sentadilla isométrica (1 minuto)</strong>
              <p>Contra la pared, como si estuvieras sentada en una silla.</p>
            </div>
          </label>
          <label class="checkbox-container" style="margin-bottom:1rem;">
            <input type="checkbox" id="d19-fin3">
            <span class="checkmark"></span>
            <div class="checkbox-text">
              <strong>Plancha con elevación de pierna</strong>
              <img src="./ref-plank.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Plancha">
              <p>30 segundos por lado. Trabaja glúteos y core.</p>
            </div>
          </label>
          <label class="checkbox-container" style="margin-bottom:0;">
            <input type="checkbox" id="d19-fin4">
            <span class="checkmark"></span>
            <div class="checkbox-text">
              <strong>Caminatas laterales con banda</strong>
              <p>2 rondas de 15 pasos por lado.</p>
            </div>
          </label>
        </div>
      </div>
      
      <div class="content-card" style="margin-top: 1.5rem; background: #fafafa; border-left: 4px solid var(--primary);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Enfriamiento (10 minutos):</h4>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li>Estiramientos de glúteos, caderas y cuádriceps.</li>
          <li>Respiración controlada para relajar el cuerpo.</li>
        </ul>
      </div>
    `
  },
  {
    day: 20,
    title: "Evaluación final y rutina de cierre",
    content: `
      <p>Llegaste a la recta final del programa. Este día está dividido en dos partes:</p>
      <ol style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 1.5rem;">
        <li><strong>Evaluación final:</strong> Para comparar tus avances desde el inicio.</li>
        <li><strong>Rutina ligera de cierre:</strong> Para terminar con una sesión completa que active tus glúteos sin sobrecargar.</li>
      </ol>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">Parte 1: Evaluación final (30 minutos)</h4>
        <p style="font-size: 0.9rem; margin-bottom: 1rem;">Anota tus resultados para ver tu progreso. Notarás que, más allá de lo visual, tu fuerza, resistencia y forma física han mejorado notablemente.</p>
        
        <div class="interactive-form" style="margin-bottom: 0;">
          <div class="form-group">
            <label>Circunferencia de glúteos (cm)</label>
            <input type="number" id="gluteos-d20-input" placeholder="Ej: 98">
          </div>
          <div class="form-group">
            <label>Circunferencia de cintura (cm)</label>
            <input type="number" id="cintura-d20-input" placeholder="Ej: 63">
          </div>
          <div class="form-group">
            <label>Sentadillas en 1 minuto (Repeticiones)</label>
            <input type="number" id="squats-d20-input" placeholder="Ej: 45">
          </div>
          <div class="form-group">
            <label>Hip thrusts en 1 minuto (Repeticiones)</label>
            <input type="number" id="thrusts-d20-input" placeholder="Ej: 40">
          </div>
          <button id="save-day20-medidas" class="primary-btn pulse" style="width: 100%; border-radius: 8px;">Guardar Evaluación</button>
        </div>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <h3 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-stopwatch"></i> Parte 2: Rutina de cierre (3 rondas)</h3>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Formato:</strong> 12 repeticiones por ejercicio | 30 segundos de descanso entre ejercicios.<br>
          <em>Rutina ligera enfocada en activación completa y controlada.</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d20-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Sentadillas con peso corporal</strong>
            <img src="./ref-squat.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Sentadilla">
            <p>Concéntrate en la conexión mente-músculo.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d20-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Puente de glúteos con banda</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Puente">
            <p>Mantén la contracción en la parte alta.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d20-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Fire hydrants (15 rep/lado)</strong>
            <img src="./ref-hydrant.png" alt="Fire hydrants" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Ejecución lenta y controlada.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d20-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Elevaciones de pierna acostada (15 rep/lado)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Elevación lateral">
            <p>Trabaja la parte lateral del glúteo.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d20-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Step-ups suaves</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Sin prisa, enfócate en la técnica.</p>
          </div>
        </label>
      </div>
      
      <div class="content-card" style="margin-top: 1.5rem; background: #fafafa; border-left: 4px solid var(--primary);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Estiramientos finales (15 minutos):</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0.5rem;">Dedica tiempo a estirar y agradecerle a tu cuerpo por todo el esfuerzo de estas semanas.</p>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li>Postura de la paloma (1 minuto por pierna)</li>
          <li>Estiramiento de glúteos acostado (30 segundos por lado)</li>
          <li>Estiramiento de isquiotibiales (1 minuto por pierna)</li>
          <li>Respiración profunda con visualización positiva (5 minutos)</li>
        </ul>
      </div>
    `
  },
  {
    day: 21,
    title: "Cierre y Plan de Mantenimiento",
    content: `
      <p>El último día del programa está enfocado en consolidar los resultados obtenidos con un entrenamiento integral de cuerpo inferior y un plan de alimentación alto en proteínas para potenciar la recuperación muscular y mantener la tonificación. La proteína es esencial para reparar las fibras musculares trabajadas durante estas semanas y evitar la pérdida de masa magra.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--primary);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Plan de Alimentación (Rico en Proteínas)</h4>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li><strong>Desayuno:</strong> Avena cocida con 1 scoop de proteína, 1 cda de chía y 100g de frutos rojos.</li>
          <li><strong>Media mañana:</strong> Yogur griego natural (150g) con 15g de almendras.</li>
          <li><strong>Almuerzo:</strong> 150g de pechuga a la plancha, 60g de quinoa, ensalada mixta con aguacate.</li>
          <li><strong>Merienda:</strong> 1 manzana y 1 cda de mantequilla de maní.</li>
          <li><strong>Cena:</strong> 150g de salmón al horno, 100g de arroz integral, verduras al vapor.</li>
        </ul>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--secondary);">
        <h3 style="color: var(--secondary); margin-bottom: 0.5rem;"><i class="fas fa-stopwatch"></i> Rutina Principal (4 rondas)</h3>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">
          <strong>Calentamiento:</strong> 10 min (Marcha, sentadillas, caminatas laterales, círculos de cadera).<br>
          <strong>Formato:</strong> 15 repeticiones por ejercicio | 45 segundos de descanso entre ejercicios.<br>
          <em>¡Usa el cronómetro flotante para medir tus tiempos!</em>
        </p>
      </div>

      <div class="interactive-form">
        <label class="checkbox-container">
          <input type="checkbox" id="d21-ex1">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>1. Hip thrusts con banda y peso</strong>
            <img src="./ref-thrust.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Hip thrust">
            <p>Mantén la contracción en la parte alta por 3 segundos.</p>
          </div>
        </label>
        
        <label class="checkbox-container">
          <input type="checkbox" id="d21-ex2">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>2. Sentadillas búlgaras (12 rep/pierna)</strong>
            <div style="background-color: #f4f4f4; border: 2px dashed #ccc; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fas fa-camera" style="color: #aaa; font-size: 1.5rem; margin-bottom: 5px;"></i><br>
              <span style="color: #888; font-size: 0.85rem; font-weight: bold;">[Imagen Pendiente]</span>
            </div>
            <p>Desafía la estabilidad y la fuerza unilateral.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d21-ex3">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>3. Step-ups con peso (15 rep/pierna)</strong>
            <img src="./ref-stepup.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Step up">
            <p>Enfócate en empujar desde el talón para activar los glúteos.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d21-ex4">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>4. Fire hydrants con banda (20 rep/lado)</strong>
            <img src="./ref-hydrant.png" alt="Fire hydrants con banda" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Trabaja el glúteo medio y la cadera.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d21-ex5">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>5. Elevaciones laterales de pierna (15 rep/lado)</strong>
            <img src="./ref-sideraise.png" class="mini-ref-img" style="margin-top:0.5rem;" alt="Elevación lateral">
            <p>Mejora la tonificación lateral.</p>
          </div>
        </label>

        <label class="checkbox-container">
          <input type="checkbox" id="d21-ex6">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>6. Puente de glúteos con pulsaciones (20 rep + 10 pulso)</strong>
            <img src="./ref-thrust-pulse.png" alt="Puente de glúteos con pulsaciones" class="mini-ref-img" style="margin-top: 0.5rem;">
            <p>Finaliza con una activación máxima.</p>
          </div>
        </label>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fff5f5; border-left: 4px solid #FF3B30;">
        <h4 style="color: #FF3B30; margin-bottom: 0.5rem;">Gran Evaluación Final:</h4>
        <p style="font-size: 0.9rem; margin-bottom: 1rem; color: var(--text-main);">Vuelve a medir las mismas áreas que evaluaste el primer día y compara los resultados. ¡Siéntete orgullosa de tu transformación!</p>
        
        <div class="interactive-form" style="margin-bottom: 0;">
          <div class="form-group">
            <label>Circunferencia de glúteos final (cm)</label>
            <input type="number" id="gluteos-d21-input" placeholder="Ej: 100">
          </div>
          <div class="form-group">
            <label>Circunferencia de cintura final (cm)</label>
            <input type="number" id="cintura-d21-input" placeholder="Ej: 61">
          </div>
          <button id="save-day21-medidas" class="primary-btn pulse" style="width: 100%; border-radius: 8px;">Guardar Resultados Finales</button>
        </div>
      </div>
      
      <div class="content-card" style="margin-top: 1.5rem; background: #fafafa; border-left: 4px solid var(--primary);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">¡LO LOGRASTE!</h4>
        <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0;">Completar estos 21 días es un gran logro. Tómate la foto final, ponte tu pantalón favorito y siéntete orgullosa de tu disciplina. Este no es el final, es tu nuevo estándar de vida. Puedes repetir este programa aumentando la carga o integrando nuevos ejercicios. Tu mejor versión está en camino.</p>
      </div>
    `
  },
  {
    day: 22,
    title: "Plan Post-Reto (Extra)",
    content: `
      <p>Haber llegado al final del reto es un gran logro, pero la verdadera transformación ocurre cuando lo que aprendiste se convierte en un estilo de vida. Este plan post-reto te ayudará a mantener lo conseguido y seguir avanzando.</p>
      
      <div class="content-card" style="margin-bottom: 1.5rem; background: #fafafa; border-left: 4px solid var(--secondary);">
        <h4 style="color: var(--secondary); margin-bottom: 0.5rem;">¿Qué hacer después del programa?</h4>
        <p style="font-size: 0.9rem; font-weight: bold; margin-bottom: 0.2rem;">Si tu objetivo es mantener:</p>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 1rem;">
          <li>Entrena glúteos 2-3 veces por semana.</li>
          <li>Incorpora 2 días de cardio moderado.</li>
          <li>Mantén una alimentación balanceada en calorías de mantenimiento.</li>
        </ul>
        <p style="font-size: 0.9rem; font-weight: bold; margin-bottom: 0.2rem;">Si quieres seguir progresando:</p>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li>Entrena 4-5 veces por semana, aumentando la carga y repeticiones.</li>
          <li>Haz cardio HIIT 2 veces por semana.</li>
          <li>Ajusta la nutrición para un ligero superávit calórico si buscas aumentar volumen.</li>
        </ul>
      </div>

      <div class="content-card" style="margin-bottom: 1.5rem; border-left: 4px solid var(--primary);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Consejos para mantener la motivación</h4>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li>Establece nuevas metas (ej. levantar más peso o mejorar la técnica).</li>
          <li>Varía tus entrenamientos para evitar la monotonía.</li>
          <li>Encuentra un compañero de entrenamiento.</li>
          <li>Date recompensas saludables (nueva ropa deportiva, un masaje, etc.).</li>
        </ul>
      </div>

      <h3 style="color: var(--secondary); margin-top: 1.5rem;">Nutrición para el mantenimiento</h3>
      <ul style="font-size: 0.95rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 1.5rem;">
        <li><strong>Si buscas definir más:</strong> Mantén un déficit calórico moderado.</li>
        <li><strong>Si quieres aumentar masa muscular:</strong> Aumenta ligeramente tus calorías.</li>
        <li>Mantén el consumo de proteínas entre 1.8 y 2.2 g por kg de peso corporal.</li>
        <li>Prioriza alimentos frescos y evita procesados.</li>
      </ul>

      <div class="content-card" style="margin-bottom: 1.5rem; background: #fff5f5; border-left: 4px solid #FF3B30;">
        <h4 style="color: #FF3B30; margin-bottom: 0.5rem;"><i class="fas fa-exclamation-triangle"></i> Errores comunes y cómo evitarlos</h4>
        <ul style="font-size: 0.9rem; padding-left: 1.2rem; color: var(--text-main); margin-bottom: 0;">
          <li><strong>Dejar de entrenar:</strong> Mantén la rutina como parte de tu semana.</li>
          <li><strong>Descuidar la alimentación:</strong> Evita volver a malos hábitos alimenticios.</li>
          <li><strong>No establecer nuevos objetivos:</strong> Esto puede llevarte a perder motivación.</li>
          <li><strong>Eliminar completamente el descanso:</strong> El sobreentrenamiento puede ser contraproducente.</li>
        </ul>
      </div>
      <div class="interactive-form" style="margin-top: 2rem;">
        <label class="checkbox-container">
          <input type="checkbox" id="d22-commitment">
          <span class="checkmark"></span>
          <div class="checkbox-text">
            <strong>Mi Compromiso Personal</strong>
            <p>Me comprometo a seguir cuidando mi salud, mi cuerpo y mi mente. ¡Esto es solo el comienzo!</p>
          </div>
        </label>
      </div>

      <p style="font-size: 1rem; color: var(--text-main); font-weight: bold; text-align: center; margin-top: 2rem;">
        Completar este programa es un hito impresionante. Has demostrado que, con disciplina y constancia, eres capaz de lograr cambios positivos en tu cuerpo y mente. Siéntete orgullosa de cada entrenamiento, cada comida saludable y cada decisión que te acercó a este resultado.
      </p>
      <p style="font-size: 0.95rem; color: var(--text-main); text-align: center;">
        Recuerda que la transformación no termina aquí. Este es solo el comienzo de un camino hacia una vida más saludable y activa. Sigue moviéndote, sigue desafiándote y, sobre todo, sigue creyendo en ti. La mejor inversión que puedes hacer es en tu bienestar.
      </p>
    `
  }
];
