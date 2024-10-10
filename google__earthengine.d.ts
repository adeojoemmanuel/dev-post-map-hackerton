declare module '@google/earthengine' {
    export = ee;
  
    namespace ee {
      function initialize(
        baseurl?: string | null,
        tileurl?: string | null,
        success?: () => void,
        failure?: (error: any) => void
      ): void;
  
      function reset(): void;
  
      namespace data {
        function setAuthToken(token: string): void;
      }
  
      class Image {
        constructor(imageId: string);
        getInfo(callback: (info: any) => void): void;
      }
    }
}
  