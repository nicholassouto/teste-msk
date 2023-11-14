import GlobalStyle from "@/styles/globals";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from '../context/cartContext';


import BuyList from "@/components/buyList";
import { useState } from "react";
import HeaderComp from "@/components/HeaderLayout";
import FooterComp from "@/components/FooterLayout";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const [isBuyListVisible, setIsBuyListVisible] = useState(false);


  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div>
          <GlobalStyle />
          <HeaderComp />
          <Component {...pageProps} />
          <FooterComp />
          <BuyList
            isModalVisible={isBuyListVisible}
            setIsModalVisible={setIsBuyListVisible}
          />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
