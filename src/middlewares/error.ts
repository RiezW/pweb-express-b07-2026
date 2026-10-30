import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/http-error";

const fail = (
  res: Response,
  status: number,
  message: string
): void => {
  res.status(status).json({
    status: false,
    message,
  });
};

// Handle unknown endpoints
export const notFound = (
  req: Request,
  res: Response
): void => {
  fail(
    res,
    404,
    `Endpoint ${req.method} ${req.originalUrl} tidak ditemukan`
  );
};

// Handle application errors
export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof HttpError) {
    fail(res, err.status, err.message);
    return;
  }

  console.error(err);
  fail(res, 500, "Terjadi kesalahan pada server");
};
