import Book from '../model/bookModel.js';

export const createBook = async (req,res) => {
    try {
        const book = new Book(req.body);
        const newBook = await book.save()
        console.log("Libro Creado Correctamente", newBook);
        return res.status(201).json({
            message: "Libro creado correctamente",
            book: newBook,
        });
    } catch (error) {
        console.error("Error al crear el libro", error);
        return res.status(500).json({
            message: "Error al crear el libro",
            error: error.message
        })
    }
}

export const getBooks = async (req,res) => {
    try {
        const books = await Book.find();
        if(books.lenght === 0) {
            return res.status(404).json({
                message: "No se encontraron libros"
            })
        }else {
            return res.status(200).json({
                message: "Libros encontrados",
                books,
            });
        }
            
    } catch (error) {
        console.error("Error al obtener los libros", error);
        return res.status(500).json({
            message: "Error al obtener los libros",
            error: error.message
        });
    }
} 

export const updateBook = async (req,res) => {
 try {
    const id = req.params.id;
    const updatedData = req.body;
    if(!id) {
        return res.status(400).json({
            message: "El id es requerido"
        })
    }
    const book = await Book.findByIdAndUpdate(id, updatedData, {new: true});
    if(!book) {
        return res.status(404).json({
            message: "Libro no encontrado"
        })
    }else {
        return res.status(200).json({
            message: "Libro actualizado",
            book,
        });
    }

 } catch (error) {
    console.error("Error al actualizar el libro", error);
    return res.status(500).json({
        message: "Error al actualizar el libro",
        error: error.message
    });
 }   // Lógica para actualizar un libro
}

export const deleteBook = async (req,res) => {
    try {
        const id = req.params.id;   
        const book = await Book.findByIdAndDelete(id);
        if(!book) {
            return res.status(404).json({
                message: "Libro no encontrado"
            })
        }else {
            return res.status(200).json({
                message: "Libro eliminado",
                book,
            });
        }
    } catch (error) {
        console.error("Error al eliminar el libro", error);
        return res.status(500).json({
            message: "Error al eliminar el libro",
            error: error.message
        });
    }
}