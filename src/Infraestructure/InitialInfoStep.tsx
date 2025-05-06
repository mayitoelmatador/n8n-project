import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

interface IFormInputs {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
}

const InitialInfoStep:React.FC= () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data: any) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        margin: "0 auto",
        mt: 5,
      }}
    >
      <TextField
        label="Campo 1"
        {...register("field1", { required: "Campo 1 es obligatorio" })}
        error={!!errors.field1}
        helperText={errors.field1?.message}
      />
      <TextField
        label="Campo 2"
        {...register("field2", {
          required: "Campo 2 es obligatorio",
          minLength: { value: 3, message: "Mínimo 3 caracteres" },
        })}
        error={!!errors.field2}
        helperText={errors.field2?.message}
      />
      <TextField
        label="Campo 3 (Email)"
        {...register("field3", {
          required: "Campo 3 es obligatorio",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Correo electrónico inválido",
          },
        })}
        error={!!errors.field3}
        helperText={errors.field3?.message}
      />
      <TextField
        label="Campo 4"
        {...register("field4", {
          required: "Campo 4 es obligatorio",
          maxLength: { value: 10, message: "Máximo 10 caracteres" },
        })}
        error={!!errors.field4}
        helperText={errors.field4?.message}
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Box>
  );
};

export default InitialInfoStep;
