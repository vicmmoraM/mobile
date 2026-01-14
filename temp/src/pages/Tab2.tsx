import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Menu,
  Flame,
  Target,
  Calendar,
  TrendingUp,
  Sprout,
  CloudRain,
  ListTodo,
  Settings,
  Trophy
} from 'lucide-react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateToTab = (path: string) => {
    history.push(path);
  };

  const currentTab = location.pathname;

  return (
    <div className="habits-container">
      {/* Header */}
      <div className="header">
        <button className="menu-button">
          <Menu size={24} />
        </button>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginRight: '48px' }}>
          <h1 className="title" style={{ margin: 0 }}>Estadísticas</h1>
        </div>
      </div>

      <div className="main-content">
        <div className="section-subtitle">Tu progreso por tipo de hábito</div>

        {/* Resumen General - Balance */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <TrendingUp size={24} className="stat-icon theme-color" />
            </div>
            <div className="stat-info">
              <span className="stat-value">85%</span>
              <span className="stat-label">Eficiencia Total</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Calendar size={24} className="stat-icon purple-color" />
            </div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Días Perfectos</span>
            </div>
          </div>
        </div>

        {/* Buenos Hábitos (Green) */}
        <div className="chart-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ padding: '8px', backgroundColor: 'rgba(34, 197, 94, 0.2)', borderRadius: '8px' }}>
              <Sprout size={20} color="#22c55e" />
            </div>
            <h3 className="section-title" style={{ margin: 0 }}>Buenos Hábitos</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>18</div>
              <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Completados esta semana</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#22c55e' }}>92%</div>
              <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Tasa de éxito</div>
            </div>
          </div>

          {/* Simple Progress Bar for Good Habits */}
          <div style={{ width: '100%', height: '8px', backgroundColor: '#27272a', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '92%', height: '100%', backgroundColor: '#22c55e' }}></div>
          </div>
        </div>

        {/* Malos Hábitos (Red) */}
        <div className="chart-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ padding: '8px', backgroundColor: 'rgba(239, 68, 68, 0.2)', borderRadius: '8px' }}>
              <CloudRain size={20} color="#ef4444" />
            </div>
            <h3 className="section-title" style={{ margin: 0 }}>Malos Hábitos</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>5</div>
              <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Días evadidos</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ef4444' }}>3</div>
              <div style={{ fontSize: '12px', color: '#a1a1aa' }}>Recaídas</div>
            </div>
          </div>

          {/* Weekly Avoidance Chart (Simple Bars) */}
          <div className="bar-chart-container">
            <div className="bar-column">
              <div className="bar-bg"><div className="bar-fill" style={{ height: '80%', backgroundColor: '#ef4444' }}></div></div>
              <span className="bar-label">L</span>
            </div>
            <div className="bar-column">
              <div className="bar-bg"><div className="bar-fill" style={{ height: '100%', backgroundColor: '#ef4444' }}></div></div>
              <span className="bar-label">M</span>
            </div>
            <div className="bar-column">
              <div className="bar-bg"><div className="bar-fill" style={{ height: '40%', backgroundColor: '#ef4444' }}></div></div>
              <span className="bar-label">X</span>
            </div>
            <div className="bar-column">
              <div className="bar-bg"><div className="bar-fill" style={{ height: '90%', backgroundColor: '#ef4444' }}></div></div>
              <span className="bar-label">J</span>
            </div>
            <div className="bar-column">
              <div className="bar-bg"><div className="bar-fill" style={{ height: '60%', backgroundColor: '#ef4444' }}></div></div>
              <span className="bar-label">V</span>
            </div>
            <div className="bar-column">
              <div className="bar-bg"><div className="bar-fill" style={{ height: '85%', backgroundColor: '#ef4444' }}></div></div>
              <span className="bar-label">S</span>
            </div>
            <div className="bar-column">
              <div className="bar-bg"><div className="bar-fill" style={{ height: '95%', backgroundColor: '#ef4444' }}></div></div>
              <span className="bar-label">D</span>
            </div>
          </div>
        </div>

        {/* Tareas (Blue) */}
        <div className="chart-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ padding: '8px', backgroundColor: 'rgba(99, 102, 241, 0.2)', borderRadius: '8px' }}>
              <ListTodo size={20} color="#6366f1" />
            </div>
            <h3 className="section-title" style={{ margin: 0 }}>Tareas Completadas</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#6366f1' }}>14</div>
            <div style={{ fontSize: '14px', color: '#a1a1aa', paddingBottom: '6px' }}>tareas terminadas este mes</div>
          </div>
        </div>

        {/* Spacer for bottom nav */}
        <div style={{ height: '80px' }}></div>
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
            <Settings
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

export default Tab2;
