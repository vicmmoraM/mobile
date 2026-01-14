import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Plus, Menu, CloudRain, Sprout, ListTodo, ChevronDown, BarChart3, Settings } from 'lucide-react';
import './HabitsHome.css';

interface Habit {
  id: string;
  name: string;
  type: 'good' | 'bad' | 'task';
  icon: string;
  completed: boolean;
}

const HabitsHome: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Actualizar hora cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const getDaysOfWeek = () => {
    const days = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    const today = new Date();
    const currentDay = today.getDay();
    const currentDate = today.getDate();
    
    return Array.from({ length: 7 }, (_, i) => {
      const dayIndex = (currentDay - 3 + i + 7) % 7;
      const date = new Date(today);
      date.setDate(currentDate - 3 + i);
      
      return {
        day: days[dayIndex],
        date: date.getDate(),
        isToday: i === 3
      };
    });
  };

  const daysOfWeek = getDaysOfWeek();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const createHabit = (type: 'good' | 'bad' | 'task') => {
    const habitNames = {
      good: '🌱 Hacer ejercicio',
      bad: '☁️ Evitar redes sociales',
      task: '✅ Completar proyecto'
    };

    const newHabit: Habit = {
      id: Date.now().toString(),
      name: habitNames[type],
      type,
      icon: type === 'good' ? '🌱' : type === 'bad' ? '☁️' : '✅',
      completed: false
    };

    setHabits([...habits, newHabit]);
    setShowOnboarding(false);
    setShowCreateModal(false);
  };

  const toggleHabit = (id: string) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const navigateToTab = (path: string) => {
    history.push(path);
  };

  const currentTab = location.pathname;

  return (
    <div className="habits-container">
      {/* Header */}
      <div className="header">
        <button className="menu-button" onClick={() => alert('Menú próximamente')}>
          <Menu size={24} />
        </button>
        <h1 className="title">Hoy</h1>
        <button className="add-button" onClick={() => setShowCreateModal(true)}>
          <Plus size={28} strokeWidth={2.5} />
        </button>
      </div>

      {/* Week Calendar */}
      <div className="week-calendar">
        {daysOfWeek.map((item, index) => (
          <div key={index} className="day-container">
            <span className={`day-label ${item.isToday ? 'active' : ''}`}>
              {item.day}
            </span>
            <div className={`day-circle ${item.isToday ? 'active' : ''}`}>
              {item.date}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {habits.length === 0 ? (
          <>
            {/* Empty State */}
            <div className="empty-state">
              <div className="icon-container">
                <CloudRain size={80} color="#f87171" strokeWidth={1.5} />
              </div>
              <h2 className="empty-title">Aún no hay hábitos...</h2>
              <p className="empty-subtitle">Comienza tu viaje hacia mejores hábitos</p>
            </div>

            {/* Create Habit Button */}
            <button className="create-button" onClick={() => setShowCreateModal(true)}>
              <Plus size={24} strokeWidth={2.5} />
              Crear un nuevo hábito
            </button>
          </>
        ) : (
          <>
            {/* Habits List */}
            <div className="habits-list">
              {habits.map((habit) => (
                <div key={habit.id} className={`habit-card ${habit.completed ? 'completed' : ''}`}>
                  <div className="habit-info">
                    <span className="habit-icon">{habit.icon}</span>
                    <div className="habit-details">
                      <h3 className="habit-name">{habit.name}</h3>
                      <p className="habit-type">
                        {habit.type === 'good' ? 'Buen hábito' : 
                         habit.type === 'bad' ? 'Mal hábito' : 'Tarea'}
                      </p>
                    </div>
                  </div>
                  <div className="habit-actions">
                    <button 
                      className={`check-button ${habit.completed ? 'checked' : ''}`}
                      onClick={() => toggleHabit(habit.id)}
                    >
                      {habit.completed ? '✓' : ''}
                    </button>
                    <button 
                      className="delete-button"
                      onClick={() => deleteHabit(habit.id)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add More Button */}
            <button className="add-more-button" onClick={() => setShowCreateModal(true)}>
              <Plus size={20} />
              Agregar otro hábito
            </button>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-container">
          <button 
            onClick={() => navigateToTab('/tab1')}
            className={`nav-button ${currentTab === '/tab1' ? 'active' : ''}`}
          >
            <ListTodo 
              size={24} 
              color={currentTab === '/tab1' ? '#818cf8' : '#71717a'} 
            />
            <span>Hábitos</span>
          </button>

          <button 
            onClick={() => navigateToTab('/tab2')}
            className={`nav-button ${currentTab === '/tab2' ? 'active' : ''}`}
          >
            <BarChart3 
              size={24} 
              color={currentTab === '/tab2' ? '#818cf8' : '#71717a'} 
            />
            <span>Estadísticas</span>
          </button>

          <button 
            onClick={() => navigateToTab('/tab3')}
            className={`nav-button ${currentTab === '/tab3' ? 'active' : ''}`}
          >
            <Settings 
              size={24} 
              color={currentTab === '/tab3' ? '#818cf8' : '#71717a'} 
            />
            <span>Configuración</span>
          </button>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Crear nuevo hábito</h2>
            <p className="modal-subtitle">Elige el tipo de hábito que quieres crear</p>
            
            <div className="modal-options">
              <button className="modal-option good" onClick={() => createHabit('good')}>
                <Sprout size={24} />
                <div>
                  <h4>Buen hábito</h4>
                  <p>Comienza una rutina positiva</p>
                </div>
              </button>

              <button className="modal-option bad" onClick={() => createHabit('bad')}>
                <CloudRain size={24} />
                <div>
                  <h4>Mal hábito</h4>
                  <p>Rompe un hábito no deseado</p>
                </div>
              </button>

              <button className="modal-option task" onClick={() => createHabit('task')}>
                <ListTodo size={24} />
                <div>
                  <h4>Tarea única</h4>
                  <p>Rastrea una tarea específica</p>
                </div>
              </button>
            </div>

            <button className="modal-close" onClick={() => setShowCreateModal(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitsHome;