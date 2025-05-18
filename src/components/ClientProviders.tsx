"use client";

import { Provider } from "react-redux";
import { store } from "../lib/store"; // 경로가 정확한지 확인해주세요.

export function ClientProviders({ children }: { children: React.ReactNode }) {
	return <Provider store={store}>{children}</Provider>;
}
