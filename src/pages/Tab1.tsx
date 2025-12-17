import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCheckbox, IonProgressBar, IonIcon, IonButton } from '@ionic/react';
import { fitness, restaurant, water, moon, walk } from 'ionicons/icons';
import { useState } from 'react';
import './Tab1.css';

interface Habit {
  id: number;
  name: string;
  icon: string;
  completed: boolean;
  category: 'exercise' | 'nutrition' | 'wellness';
}

const Tab1: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: 'Hacer ejercicio 30 min', icon: fitness, completed: false, category: 'exercise' },
    { id: 2, name: 'Beber 8 vasos de agua', icon: water, completed: false, category: 'wellness' },
    { id: 3, name: 'Comer 3 porciones de frutas', icon: restaurant, completed: false, category: 'nutrition' },
    { id: 4, name: 'Caminar 10,000 pasos', icon: walk, completed: false, category: 'exercise' },
    { id: 5, name: 'Dormir 8 horas', icon: moon, completed: false, category: 'wellness' },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const progress = completedCount / habits.length;

  const resetDay = () => {
    setHabits(habits.map(habit => ({ ...habit, completed: false })));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mis Hábitos Diarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mis Hábitos</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Progreso del día */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Progreso de Hoy</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div style={{ marginBottom: '10px' }}>
              <strong>{completedCount} de {habits.length} completados</strong>
            </div>
            <IonProgressBar value={progress} color="success"></IonProgressBar>
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <span style={{ fontSize: '24px' }}>{Math.round(progress * 100)}%</span>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Lista de hábitos */}
        {habits.map(habit => (
          <IonCard key={habit.id} style={{ opacity: habit.completed ? 0.6 : 1 }}>
            <IonCardContent>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <IonIcon 
                  icon={habit.icon} 
                  style={{ fontSize: '32px', color: habit.completed ? '#2dd36f' : '#3880ff' }} 
                />
                <div style={{ flex: 1 }}>
                  <strong style={{ 
                    textDecoration: habit.completed ? 'line-through' : 'none',
                    fontSize: '16px'
                  }}>
                    {habit.name}
                  </strong>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                    {habit.category === 'exercise' && ' Ejercicio'}
                    {habit.category === 'nutrition' && ' Nutrición'}
                    {habit.category === 'wellness' && ' Bienestar'}
                  </div>
                </div>
                <IonCheckbox 
                  checked={habit.completed}
                  onIonChange={() => toggleHabit(habit.id)}
                  style={{ transform: 'scale(1.3)' }}
                />
              </div>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Botón para resetear el día */}
        <IonButton 
          expand="block" 
          color="medium" 
          onClick={resetDay}
          style={{ marginTop: '20px' }}
        >
          Resetear Día
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
