import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getArtistId } from "@/api/api.actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    artist: z.string().min(2, {
        message: "Artist must be at least 2 characters.",
    }),
});

const ArtistForm: React.FC<ArtistFormProps> = ({ onArtistHandle }) => {
    const token = localStorage.getItem('storedToken');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            artist: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const artistName = values.artist;
        const artistId = await getArtistId(token, artistName);
        onArtistHandle(artistId);
    };

    return (
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
    );
};

export default ArtistForm;
