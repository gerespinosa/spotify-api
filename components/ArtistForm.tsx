'use client'

import { getArtistId, getToken } from "@/api/api.actions"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    artist: z.string().min(2, {
        message: "Artist must be at least 2 characters.",
    }),
})

const ArtistForm = ({ onArtistHandle }) => {

    const token: string | null = localStorage.getItem('storedToken')

    if (!token) {
        const newToken = getToken()
        console.log(newToken)
    }


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            artist: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const handleSubmit = async () => {
            const artistName = values.artist
            const artistId = await getArtistId(token, artistName)
            onArtistHandle(artistId)
        }

        handleSubmit()
    }

    return (
        <section className="artist_form">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
                    <FormField
                        control={form.control}
                        name="artist"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Enter your artist" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-green-darker hover:bg-green-light">Go!</Button>
                </form>
            </Form>
        </section>
    )
};

export default ArtistForm;
