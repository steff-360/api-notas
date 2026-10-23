
 export async function listarNotas(req, res, next) {
    try {
      const notas = await notaService.listar();
      res.json({ data: notas });
    } catch (error) { next(error); }
  }
  
  export async function obtenerNota(req, res, next) {
    try {
      const nota = await notaService.buscarPorId(req.params.id);
      if (!nota) return res.status(404).json({ error: "Nota no encontrada" });
      res.json({ data: nota });
    } catch (error) { next(error); }
  }

  export async function actualizarNota(req, res, next) {
    try {
      const datos = new ActualizarNotaDTO(req.body);
      const nota = await notaService.actualizar(req.params.id, datos);
      if (!nota) return res.status(404).json({ error: "Nota no encontrada" });
      res.json({ data: nota });
    } catch (error) { next(error); }
  }

  export async function eliminarNota(req, res, next) {
    try {
      const nota = await notaService.eliminar(req.params.id);
      if (!nota) return res.status(404).json({ error: "Nota no encontrada" });
      res.status(204).send();
    } catch (error) { next(error); }
  }

