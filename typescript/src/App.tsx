import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TypeManagement } from "./typeManagement";
import { DataMap } from "./dataMap";

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<TypeManagement />} />
        <Route path="/dataMap" element={<DataMap />} />

        <Route path="*" element={<Navigate to="/dataMap" />} />
      </Routes>
    </Container>
  );
}

export default App;
