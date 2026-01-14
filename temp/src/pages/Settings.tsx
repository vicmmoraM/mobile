
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  ListTodo, BarChart3, Settings as SettingsIcon, Menu, User, Bell,
  Moon, Sun, Languages, HelpCircle, Info, LogOut,
  ChevronRight, Smartphone, Lock, Trash2,
  Trophy
} from 'lucide-react';
import './Settings.css';

const Settings: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('Español');

  const navigateToTab = (path: string) => {
    history.push(path);
  };

  const currentTab = location.pathname;

  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de que quieres cerrar sesión?')) {
      alert('Cerrando sesión...');
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('⚠️ Esta acción eliminará todos tus datos permanentemente. ¿Estás seguro?')) {
      alert('Cuenta eliminada');
    }
  };

  return (
    <div className="settings-container">
      {/* Header */}
      <div className="header">
        <button className="menu-button" onClick={() => alert('Menú próximamente')}>
          <Menu size={24} />
        </button>
        <h1 className="title">Configuración</h1>
        <div style={{ width: '48px' }}></div>
      </div>

      {/* Main Content - Ahora con scroll */}
      <div className="main-content-scrollable">
        {/* Profile Section */}
        <div className="settings-section">
          <div className="profile-card">
            <div className="profile-avatar">
              <User size={32} />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">Usuario</h3>
              <p className="profile-email">usuario@ejemplo.com</p>
            </div>
            <button className="profile-edit">
              Editar
            </button>
          </div>
        </div>

        {/* General Settings */}
        <div className="settings-section">
          <h2 className="section-title">General</h2>

          <div className="setting-item">
            <div className="setting-left">
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
              <div className="setting-text">
                <h4>Modo oscuro</h4>
                <p>Tema oscuro activado</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-left">
              <Bell size={20} />
              <div className="setting-text">
                <h4>Notificaciones</h4>
                <p>Recordatorios diarios</p>
              </div>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <button className="setting-item clickable" onClick={() => alert('Cambiar idioma')}>
            <div className="setting-left">
              <Languages size={20} />
              <div className="setting-text">
                <h4>Idioma</h4>
                <p>{language}</p>
              </div>
            </div>
            <ChevronRight size={20} color="#71717a" />
          </button>
        </div>

        {/* App Settings */}
        <div className="settings-section">
          <h2 className="section-title">Aplicación</h2>

          <button className="setting-item clickable" onClick={() => alert('Recordatorios')}>
            <div className="setting-left">
              <Smartphone size={20} />
              <div className="setting-text">
                <h4>Recordatorios</h4>
                <p>Configura tus notificaciones</p>
              </div>
            </div>
            <ChevronRight size={20} color="#71717a" />
          </button>

          <button className="setting-item clickable" onClick={() => alert('Privacidad')}>
            <div className="setting-left">
              <Lock size={20} />
              <div className="setting-text">
                <h4>Privacidad</h4>
                <p>Gestiona tus datos</p>
              </div>
            </div>
            <ChevronRight size={20} color="#71717a" />
          </button>
        </div>

        {/* Support */}
        <div className="settings-section">
          <h2 className="section-title">Soporte</h2>

          <button className="setting-item clickable" onClick={() => alert('Centro de ayuda')}>
            <div className="setting-left">
              <HelpCircle size={20} />
              <div className="setting-text">
                <h4>Centro de ayuda</h4>
                <p>FAQ y tutoriales</p>
              </div>
            </div>
            <ChevronRight size={20} color="#71717a" />
          </button>

          <button className="setting-item clickable" onClick={() => alert('Acerca de Grit v1.0')}>
            <div className="setting-left">
              <Info size={20} />
              <div className="setting-text">
                <h4>Acerca de</h4>
                <p>Versión 1.0.0</p>
              </div>
            </div>
            <ChevronRight size={20} color="#71717a" />
          </button>
        </div>

        {/* Danger Zone */}
        <div className="settings-section">
          <h2 className="section-title danger">Zona de peligro</h2>

          <button className="setting-item clickable" onClick={handleLogout}>
            <div className="setting-left">
              <LogOut size={20} color="#f87171" />
              <div className="setting-text">
                <h4 style={{ color: '#f87171' }}>Cerrar sesión</h4>
              </div>
            </div>
            <ChevronRight size={20} color="#71717a" />
          </button>

          <button className="setting-item clickable" onClick={handleDeleteAccount}>
            <div className="setting-left">
              <Trash2 size={20} color="#ef4444" />
              <div className="setting-text">
                <h4 style={{ color: '#ef4444' }}>Eliminar cuenta</h4>
                <p style={{ color: '#ef4444' }}>Esta acción es permanente</p>
              </div>
            </div>
            <ChevronRight size={20} color="#71717a" />
          </button>
        </div>

        {/* Espacio adicional para el scroll */}
        <div style={{ height: '100px' }}></div>
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
            onClick={() => navigateToTab('/logros')}
            className={`nav-button ${currentTab === '/logros' ? 'active' : ''}`}
          >
            <Trophy
              size={24}
              color={currentTab === '/logros' ? '#818cf8' : '#71717a'}
            />
            <span>Logros</span>
          </button>

          <button
            onClick={() => navigateToTab('/tab3')}
            className={`nav-button ${currentTab === '/tab3' ? 'active' : ''}`}
          >
            <SettingsIcon
              size={24}
              color={currentTab === '/tab3' ? '#818cf8' : '#71717a'}
            />
            <span>Configuración</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;