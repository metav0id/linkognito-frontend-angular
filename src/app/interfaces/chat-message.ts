export interface ChatMessage {
  id: number;
  addressId: number;
  timeStamp?: string;
  text: string;
  senderName?: string; //only for user-module use
}
