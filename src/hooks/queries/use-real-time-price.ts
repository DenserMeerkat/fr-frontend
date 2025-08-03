import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { queryKeys } from "@/lib/query-keys";
import { stocksService } from "@/api/services/stocks.service";

export const useRealTimePrice = (
  symbol: string,
  refreshIntervalMs: number = 30000,
  enabled = true,
) => {
  const intervalRef = useRef<number | undefined>(undefined);

  const query = useQuery({
    queryKey: queryKeys.stocks.prices.latestBySymbol(symbol),
    queryFn: () => stocksService.getLatestStockPrice({ symbol }),
    enabled: enabled && !!symbol,
    staleTime: refreshIntervalMs / 2,
    refetchInterval: refreshIntervalMs,
    refetchIntervalInBackground: false,
  });

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return query;
};
