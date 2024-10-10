import * as Yup from "yup";

export const addVehicleValidationSchema = Yup.object({
  price: Yup.string().required("Cijena je obavezna"),
  year: Yup.string().required("Godina proizvodnje je obavezna"),
  mileage: Yup.string().required("Kilometraža je obavezna"),
  engineType: Yup.string().required("Vrsta motora je obavezna"),
  transmission: Yup.string().required("Mjenjač je obavezan"),
  enginePower: Yup.string().required("Snaga motora je obavezna"),
  chassisNumber: Yup.string().required("Broj šasije je obavezan"),
  description: Yup.string().required("Opis je obavezan"),
});
