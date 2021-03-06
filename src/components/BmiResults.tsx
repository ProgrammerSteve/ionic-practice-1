import React from "react";
import { IonCard, IonCardContent, IonRow, IonCol } from "@ionic/react";


const BmiResults: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol id="result">
        {props.result && (
          <IonCard>
            <IonCardContent className="ion-text-center">
              <h2>Your Body-Mass-Index</h2>
              <h3>{props.result.toFixed(2)}</h3>
            </IonCardContent>
          </IonCard>
        )}
      </IonCol>
    </IonRow>
  );
};

export default BmiResults;
