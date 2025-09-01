import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Settings, Users, Eye, UserCircle, BarChart3 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LabelList } from "recharts";

export default function DiagnosticoSlide() {
  const data = [
    { name: "Social Footprint", value: 76, change: 0 },
    { name: "Perception Power", value: 52, change: -12 },
    { name: "Engine Room", value: 48, change: -7 },
    { name: "People & Talent", value: 62, change: +3 },
  ];

  const colors = ["#3b82f6", "#ef4444", "#f59e0b", "#10b981"];

  const sintomas = [
    { text: "Campañas sin estrategia política previa", level: "red" },
    { text: "Falta de perfiles senior comerciales", level: "red" },
    { text: "Handoffs y QA débiles → retrabajo", level: "amber" },
    { text: "Decisiones reactivas sin plan maestro", level: "amber" },
    { text: "Baja visibilidad del progreso de KRs", level: "amber" },
  ];

  const causas = [
    { text: "Gobernanza de OKRs débil (roles y rituales difusos)", level: "red" },
    { text: "Backlog sin priorización ni método único", level: "amber" },
    { text: "Ausencia de tablero vivo de ejecución", level: "amber" },
    { text: "Dependencia de recursos críticos", level: "red" },
    { text: "Herramientas sin adopción completa", level: "amber" },
  ];

  const colorMap = {
    red: "text-red-600 bg-red-100 border border-red-300",
    amber: "text-yellow-600 bg-yellow-100 border border-yellow-300",
    green: "text-green-600 bg-green-100 border border-green-300",
  };

  return (
    <div className="w-full h-full bg-white p-10 grid grid-cols-2 gap-8">
      {/* Title */}
      <div className="col-span-2 text-center">
        <h1 className="text-3xl font-bold mb-2">Diagnóstico Inicial</h1>
        <p className="text-gray-600">PH South – Impacto & Performance</p>
      </div>

      {/* Chart */}
      <Card className="shadow-md rounded-2xl col-span-2">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <h2 className="font-semibold">Comparativa de Pilares</h2>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={data}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} />
              <Tooltip formatter={(val, name, props) => [`${val}/100 (${props.payload.change >= 0 ? '+' : ''}${props.payload.change})`, name]} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                <LabelList dataKey="change" position="top" formatter={(val) => `${val >= 0 ? '+' : ''}${val}`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Output vs Outcome */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <Eye className="w-10 h-10 text-blue-500 mb-3" />
          <h2 className="font-semibold mb-2">Actividad ≠ Resultado</h2>
          <p className="text-sm text-gray-600">
            Social Footprint estable (76), pero Perception Power baja (−12).<br />
            Mucha visibilidad, poco impacto real.
          </p>
        </CardContent>
      </Card>

      {/* Engine Room */}
      <Card className="shadow-md rounded-2xl">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <Settings className="w-10 h-10 text-red-500 mb-3" />
          <h2 className="font-semibold mb-2">Engine Room débil</h2>
          <p className="text-sm text-gray-600">
            48/100 (−7). Procesos poco claros, cuellos de botella, baja estandarización.
          </p>
        </CardContent>
      </Card>

      {/* People & Talent */}
      <Card className="shadow-md rounded-2xl col-span-2">
        <CardContent className="p-6 flex items-start gap-4">
          <UserCircle className="w-10 h-10 text-green-600" />
          <div>
            <h2 className="font-semibold mb-2">People & Talent Pulse</h2>
            <p className="text-sm text-gray-600">
              62/100 (+3). Aunque hay ligera mejora, persisten desafíos:<br />
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>Pipeline de talento senior incompleto</li>
                <li>Falta de SLA en procesos de contratación</li>
                <li>Necesidad de reforzar capacitación y enablement</li>
                <li>Gestión de cargas y dependencia de perfiles críticos</li>
              </ul>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Síntomas con semáforo */}
      <Card className="shadow-md rounded-2xl col-span-2">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-10 h-10 text-yellow-500" />
            <h2 className="font-semibold">Síntomas visibles</h2>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            {sintomas.map((s, idx) => (
              <li key={idx} className={`flex items-center gap-2 p-2 rounded ${colorMap[s.level]}`}>
                <span className="font-medium">{s.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Causas raíz con semáforo */}
      <Card className="shadow-md rounded-2xl col-span-2">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Users className="w-10 h-10 text-purple-500" />
            <h2 className="font-semibold">Causas raíz</h2>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            {causas.map((c, idx) => (
              <li key={idx} className={`flex items-center gap-2 p-2 rounded ${colorMap[c.level]}`}>
                <span className="font-medium">{c.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="col-span-2 text-center text-gray-500 text-sm mt-4">
        Ainhoa Marina Frial – Septiembre 2025
      </div>
    </div>
  );
}
