import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
    Trophy, Menu, Lock, CheckCircle2,
    Sprout, CloudRain, ListTodo,
    Dumbbell, Shield,
    Settings, BarChart3
} from 'lucide-react';
import './Logros.css';

interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    progress: number;
    total: number;
    locked: boolean;
    category: 'good' | 'bad' | 'task';
}

const Logros: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    const achievements: Achievement[] = [
        // Buenos Hábitos (Green)
        {
            id: '1',
            title: 'Semilla Plantada',
            description: 'Completa tu primer hábito bueno',
            icon: <Sprout size={24} color="#22c55e" />,
            progress: 1,
            total: 1,
            locked: false,
            category: 'good'
        },
        {
            id: '2',
            title: 'Rutina de Acero',
            description: '7 días seguidos de ejercicio',
            icon: <Dumbbell size={24} color="#22c55e" />,
            progress: 5,
            total: 7,
            locked: true,
            category: 'good'
        },
        // Malos Hábitos (Red)
        {
            id: '3',
            title: 'Voluntad de Hierro',
            description: 'Evita un mal hábito por 3 días',
            icon: <Shield size={24} color="#ef4444" />,
            progress: 3,
            total: 3,
            locked: false,
            category: 'bad'
        },
        {
            id: '4',
            title: 'Mente Libre',
            description: '30 días sin recaídas',
            icon: <CloudRain size={24} color="#ef4444" />,
            progress: 12,
            total: 30,
            locked: true,
            category: 'bad'
        },
        // Tareas (Blue)
        {
            id: '5',
            title: 'Tachador',
            description: 'Completa 10 tareas únicas',
            icon: <ListTodo size={24} color="#6366f1" />,
            progress: 8,
            total: 10,
            locked: true,
            category: 'task'
        },
        {
            id: '6',
            title: 'Productividad Pura',
            description: 'Completa todas las tareas de hoy',
            icon: <CheckCircle2 size={24} color="#6366f1" />,
            progress: 0,
            total: 1,
            locked: true,
            category: 'task'
        }
    ];

    const navigateToTab = (path: string) => {
        history.push(path);
    };

    const currentTab = location.pathname;

    const unlockedCount = achievements.filter(a => a.progress >= a.total).length;

    return (
        <div className="logros-page">
            {/* Header */}
            <div className="header-container">
                <div className="header">
                    <button className="menu-button">
                        <Menu size={24} />
                    </button>
                    <h1 className="title">Logros</h1>
                    <div style={{ width: '48px' }}></div>
                </div>
            </div>

            <div className="logros-content">
                <div className="logros-banner">
                    <div className="banner-icon">
                        <Trophy size={32} color="#fff" />
                    </div>
                    <div className="banner-text">
                        <h2>{unlockedCount} / {achievements.length}</h2>
                        <p>Logros Desbloqueados</p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="logros-grid">
                    {achievements.map((achievement) => {
                        const isUnlocked = achievement.progress >= achievement.total;
                        return (
                            <div key={achievement.id} className={`logros-card ${isUnlocked ? 'unlocked-card' : ''}`}>
                                <div className="card-top">
                                    <div className={`card-icon ${isUnlocked ? 'icon-unlocked' : ''}`}>
                                        {achievement.icon}
                                    </div>
                                    {isUnlocked && <CheckCircle2 size={16} className="check-badge" />}
                                </div>

                                <h3 className="card-title">{achievement.title}</h3>
                                <p className="card-desc">{achievement.description}</p>

                                <div className="card-progress">
                                    <div className="progress-bg">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${Math.min((achievement.progress / achievement.total) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Navigation - Exact Copy from Tab1 */}
            <div className="logros-bottom-nav">
                <div className="logros-nav-container">
                    <button
                        onClick={() => navigateToTab('/tab1')}
                        className={`logros-nav-button ${currentTab === '/tab1' ? 'active' : ''}`}
                    >
                        <ListTodo
                            size={24}
                            strokeWidth={2.5}
                            color={currentTab === '/tab1' ? '#818cf8' : '#71717a'}
                        />
                        <span>Hábitos</span>
                    </button>

                    <button
                        onClick={() => navigateToTab('/tab2')}
                        className={`logros-nav-button ${currentTab === '/tab2' ? 'active' : ''}`}
                    >
                        <BarChart3
                            size={24}
                            strokeWidth={2.5}
                            color={currentTab === '/tab2' ? '#818cf8' : '#71717a'}
                        />
                        <span>Estadísticas</span>
                    </button>

                    {/* LOGROS Button - Active */}
                    <button
                        onClick={() => navigateToTab('/logros')}
                        className={`logros-nav-button ${currentTab === '/logros' ? 'active' : ''}`}
                    >
                        <Trophy
                            size={24}
                            strokeWidth={2.5}
                            color={currentTab === '/logros' ? '#818cf8' : '#71717a'}
                        />
                        <span>Logros</span>
                    </button>

                    <button
                        onClick={() => navigateToTab('/tab3')}
                        className={`logros-nav-button ${currentTab === '/tab3' ? 'active' : ''}`}
                    >
                        <Settings
                            size={24}
                            strokeWidth={2.5}
                            color={currentTab === '/tab3' ? '#818cf8' : '#71717a'}
                        />
                        <span>Configuración</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logros;
