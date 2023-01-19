import { useToast } from "vue-toastification";

const config = useRuntimeConfig();
const toast = useToast();
const router = useRouter();

export const usePostFetch = async (uri: string, form: {}, after: string) => {
  try {
    await fetch(`${config.public.api}/${uri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(response => response.json())
      .then(data => {
        toast.info(data.message);
        router.push(after);
      });

  } catch (error) {
    toast.warning('Algo ha salido mal');
  }
}