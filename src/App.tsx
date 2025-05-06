import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import "./App.css";
import { dependenciesLocator } from "./DependenciesLocator";
import { usePlocState } from "./useBlocState";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import InitialInfoStep from "./Infraestructure/InitialInfoStep";

const steps = [
  "Registro",
  "Verificación Identidad",
  "Consulta Historial",
  "Analisis de Riesgo",
  "Generacion Contrato",
  "Documentacion Adicional",
  "Finalizacion",
];
const App = () => {
  // const bloc = dependenciesLocator.provideFormController();
  // const state = usePlocState(bloc);
  // useEffect(() => {
  //   createChat({
  //     webhookUrl:
  //       "https://n8n.luvserver.com/webhook/2594d16b-5b2e-4943-88ae-53c0fb27b935",
  //     webhookConfig: {
  //       method: "POST",
  //       headers: {},
  //     },
  //     target: "#n8n-chat",
  //     mode: "fullscreen",
  //     chatInputKey: "chatInput",
  //     chatSessionKey: "sessionId",
  //     metadata: {},
  //     showWelcomeScreen: true,
  //     defaultLanguage: "en",
  //     allowFileUploads: true,
  //     initialMessages: ["Grupo 11", "Automatizacion"],
  //     i18n: {
  //       en: {
  //         title: "Grupo 11",
  //         subtitle: "Automatizacion",
  //         footer: "",
  //         getStarted: "Agente IA",
  //         inputPlaceholder: "¿En que puedo ayudarte?",
  //         closeButtonTooltip: "",
  //       },
  //     },
  //   });
  // }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 0 ? (<InitialInfoStep/>) : ''}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
};

export default App;
